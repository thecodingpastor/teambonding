import mongoose from "mongoose";

const dbConnect = async () => {
  const connectionState = await mongoose.connection.readyState;

  if (connectionState === 1) {
    // Already connected
    return;
  }
  if (connectionState === 2) {
    // DB is connecting
    return;
  }

  try {
    mongoose.connect(process.env.MONGO_URI as string, {
      //   dbName: "irep",
      //   bufferCommands: true,
    });
  } catch (err: any) {
    throw new Error(err);
  }
};

export default dbConnect;
