import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    cardNumber: { type: String, required: true, unique: true },
    cvv: { type: String, required: true },
    issueDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Card = mongoose.models.Card || mongoose.model("Card", CardSchema);
export default Card;
