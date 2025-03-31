import { connectDB } from "@/lib/utils/db";
import Card from "@/lib/models/Card";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate required fields
    const requiredFields = ["fullName", "address", "email", "phone", "cardNumber", "cvv", "issueDate", "expiryDate"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    // Save new card
    const newCard = new Card(body);
    await newCard.save();

    return NextResponse.json(
      { message: "Card added successfully", card: newCard },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding card:", error.message); // Log for debugging
    return NextResponse.json({ error: "Server error, try again later" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const cards = await Card.find();
    return NextResponse.json(cards, { status: 200 });
  } catch (error) {
    console.error("Error fetching cards:", error.message); // Log for debugging
    return NextResponse.json({ error: "Server error, try again later" }, { status: 500 });
  }
}