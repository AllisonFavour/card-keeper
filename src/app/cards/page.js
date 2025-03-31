"use client";

import { useEffect, useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const res = await fetch("/api/cards");
      const data = await res.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Saved Cards</h2>
      <div className="grid gap-4">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card._id} className="p-4 bg-gray-100 rounded-lg shadow">
              <p>
                <strong>Name:</strong> {card.fullName}
              </p>
              <p>
                <strong>Email:</strong> {card.email}
              </p>
              <p>
                <strong>Phone:</strong> {card.phone}
              </p>
              <p>
                <strong>Address:</strong> {card.address}
              </p>
              <p>
                <strong>Card Number:</strong> **** **** ****{" "}
                {card.cardNumber.slice(-4)}
              </p>
              <p>
                <strong>Issue Date:</strong>{" "}
                {new Date(card.issueDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Expiry Date:</strong>{" "}
                {new Date(card.expiryDate).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No cards saved.</p>
        )}
      </div>
    </div>
  );
}
