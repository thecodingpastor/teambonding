import dbConnect from "@/lib/dbConnect";
import Client from "@/models/clientModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const clients = await Client.find();
    return new NextResponse(JSON.stringify(clients));
  } catch (err: any) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const POST = async (req: Request) => {
  const { name, logoUrl, status, description, images } = await req.json();
  if (!name || !status || images?.length < 1 || !description || !logoUrl) {
    return new NextResponse(
      JSON.stringify({ message: "All fields are required." }),
      { status: 400 }
    );
  }

  try {
    await dbConnect();
    const client = await Client.create({
      name,
      logoUrl,
      description,
      images,
      status,
    });
    if (!client) {
      return new NextResponse(
        JSON.stringify({ message: "Could not create client." }),
        { status: 400 }
      );
    }

    return new NextResponse(JSON.stringify(client));
  } catch (err: any) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PATCH = async (req: Request) => {
  const {
    name,
    status,
    description,
    // logoUrl, images
  } = await req.json();

  try {
    await dbConnect();
    const client = await Client.create({
      name,
      description,
      status,
      //   logoUrl,
      //   images,
    });
    if (!client) {
      return new NextResponse(
        JSON.stringify({ message: "Could not create client." }),
        { status: 400 }
      );
    }

    return new NextResponse(JSON.stringify(client));
  } catch (err: any) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
