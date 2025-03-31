import { connectDB } from "@/lib/utils/db";
import Card from "@/lib/models/Card";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Create new card
    const newCard = new Card(body);
    await newCard.save();

    return NextResponse.json(
      { message: "Card added successfully", card: newCard },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const cards = await Card.find();
    return NextResponse.json(cards, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
