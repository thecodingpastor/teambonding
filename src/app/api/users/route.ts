import dbConnect from "@/lib/dbConnect";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

// export const GET = async () => {
//   try {
//     await dbConnect();
//     const users = await User.findOne({ email: "a@b.com" });

//     return new NextResponse(JSON.stringify(users));
//   } catch (err: any) {
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };

export const POST = async (req: Request) => {
  const { email, password: loginPassword } = await req.json();
  if (!email || !loginPassword) {
    return new NextResponse(
      JSON.stringify({ message: "Email or password is incorrect." }),
      { status: 401 }
    );
  }

  try {
    await dbConnect();
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(loginPassword, user.password))) {
      return new NextResponse(
        JSON.stringify({ message: "Email or password is incorrect." }),
        { status: 401 }
      );
    }
    user.password = undefined;
    return new NextResponse(JSON.stringify(user));
  } catch (err: any) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
