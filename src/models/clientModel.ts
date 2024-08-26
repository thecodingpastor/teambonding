import { Schema, model, models } from "mongoose";

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the client."],
    },
    logoUrl: {
      type: String,
      required: [true, "Please provide the name of the client."],
    },
    status: {
      type: String,
      default: "pending",
      enum: {
        values: ["pending", "live"],
        message: "Invalid status entered",
      },
    },
    images: [{ label: String, id: String }],
    description: String,
  },
  { timestamps: true }
);

const Client = models.Client || model("Client", ClientSchema);
export default Client;
