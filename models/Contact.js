import { Schema, model, models } from "mongoose";

const contactSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    description: { type: String, require: true },
    phone: { type: String },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Contact = models.Contact || model("Contact", contactSchema);

export default Contact;
