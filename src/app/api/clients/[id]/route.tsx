import { deleteImageInCloud, saveImageInCloud } from "@/lib/cloudinary";
import dbConnect from "@/lib/dbConnect";
import { getErrorMessage } from "@/lib/getErrorMessage";
import ValidateImage, { ImageType } from "@/lib/validateImage";
import Client from "@/models/clientModel";
import { NextRequest, NextResponse } from "next/server";

// export const config = { api: { bodyParser: { sizeLimit: "5mb" } } };

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await dbConnect();
    const client = await Client.findOne({ _id: params.id });
    return new NextResponse(JSON.stringify(client));
  } catch (err: any) {
    return NextResponse.json({ message: "Could not fetch data." });
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { name, category, description, images } = await req.json();

  let newImages: any[] = [];
  if (images?.length > 0) {
    newImages = images.filter((img: any) => img.name);
  }

  const imagesError: any[] = [];
  newImages.forEach((img: ImageType) => {
    imagesError.push(ValidateImage(img));
  });
  // It only gets here when a user is being malicious.
  if (imagesError.includes("error"))
    return NextResponse.json(
      {
        message: `
             Invalid image or images detected. Only PNG, JPEG, JPG allowed. Max size 1MB
             `,
      },
      { status: 400 }
    );

  try {
    const pendingImageResults: any[] = [];
    if (newImages.length > 0) {
      newImages.forEach((img: ImageType) => {
        const imageUpload = saveImageInCloud(img?.url);
        pendingImageResults.push(imageUpload);
      });
    }
    const newImageResults = await Promise.all(pendingImageResults);

    await dbConnect();
    const client = await Client.findOneAndUpdate(
      { _id: params.id },
      {
        name,
        category,
        description,
        images: [
          ...images.filter((img: any) => img.fileId),
          ...newImageResults,
        ],
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!client) {
      return new NextResponse(
        JSON.stringify({ message: "Could not create client." }),
        { status: 400 }
      );
    }

    return new NextResponse(JSON.stringify(client));
  } catch (err: any) {
    return NextResponse.json({
      message: getErrorMessage(err) || "Something went wrong",
    });
  }
};

// Deletes the client
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const client = await Client.findOne({ _id: params?.id });
    if (client?.images) {
      client?.images.forEach(async (item: any) => {
        await deleteImageInCloud(item.fileId);
      });

      const deleted = await Client.findByIdAndDelete(params.id);

      return new NextResponse(JSON.stringify({ message: "Deleted" }));
    }
  } catch (err) {
    return NextResponse.json({
      message: getErrorMessage(err) || "Could not delete the client",
    });
  }
};
