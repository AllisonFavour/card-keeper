"use client";

import { useState } from "react";

export default function AddCard() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    cardNumber: "",
    cvv: "",
    issueDate: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Card added successfully!");
    } else {
      alert("Error adding card");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="date"
          name="issueDate"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          type="date"
          name="expiryDate"
          required
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Card
        </button>
      </form>
    </div>
  );
}
