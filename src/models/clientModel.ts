import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the client."],
    },
    category: {
      type: String,
      enum: {
        values: [
          "outdoor",
          "indoor",
          "sport-events",
          "wellness-programmes",
          "customized",
          "others",
        ],
        message: "Invalid category entered",
      },
    },
    images: [{ url: String, fileId: String }],
    description: String,
  },
  { timestamps: true }
);

const Client = models.Client || model("Client", ClientSchema);
export default Client;
