import { deleteImageInCloud, saveImageInCloud } from "@/lib/cloudinary";
import dbConnect from "@/lib/dbConnect";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { ImageType } from "@/lib/validateImage";
import Client from "@/models/clientModel";
import { NextRequest, NextResponse } from "next/server";

// export const config = { api: { bodyParser: { sizeLimit: "5mb" } } };

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  // Retrieve the 'category' query parameter
  const category = searchParams.get("category");
  try {
    await dbConnect();
    const clients = category
      ? await Client.find().where({ category }).select("-createdAt -updatedAt")
      : await Client.find().sort("createdAt");

    return new NextResponse(JSON.stringify(clients));
  } catch (err: any) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const POST = async (req: NextRequest) => {
  const { name, category, description, images } = await req.json();

  const pendingImageResults: any[] = [];

  images.forEach((img: ImageType) => {
    const imageUpload = saveImageInCloud(img?.url);
    pendingImageResults.push(imageUpload);
  });

  try {
    const imageResults = await Promise.all(pendingImageResults);
    await dbConnect();

    const client = await Client.create({
      name,
      category,
      description,
      images: imageResults,
    });

    return new NextResponse(JSON.stringify(client));
  } catch (err: any) {
    return NextResponse.json({
      message: getErrorMessage(err) || "Could not create a new client",
    });
  }
};

// Deletes a client image
export const DELETE = async (req: NextRequest) => {
  const { fileId, clientId } = await req.json();

  if (!fileId || !clientId) {
    return NextResponse.json({ message: "File ID and client ID missing" });
  }

  try {
    const result = await deleteImageInCloud(fileId as string);

    if (result === null) {
      return new NextResponse(
        JSON.stringify({ message: "File already deleted or not found." }),
        { status: 400 }
      );
    }

    const client = await Client.findOne({ _id: clientId });

    const updatedImages = client.images.filter(
      (img: any) => img.fileId !== fileId
    );

    client.images = updatedImages;
    await client.save({ new: true });

    if (!client?._id) {
      if (!fileId || !clientId) {
        return NextResponse.json({ message: "File cannot be found!" });
      }
    }

    return new NextResponse(JSON.stringify(client));
  } catch (err) {
    return NextResponse.json({
      message: "Could not delete image from Database",
    });
  }
};
