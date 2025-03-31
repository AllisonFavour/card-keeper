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

  const [showModal, setShowModal] = useState(false); // State for modal visibility

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
      setShowModal(true); // Show modal on success
    } else {
      alert("Error adding card");
    }

    setFormData({
      // Reset form fields
      fullName: "",
      address: "",
      email: "",
      phone: "",
      cardNumber: "",
      cvv: "",
      issueDate: "",
      expiryDate: "",
    });
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
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          className="w-full p-2 border rounded"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full p-2 border rounded"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          required
          className="w-full p-2 border rounded"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        <input
          type="password"
          name="cvv"
          placeholder="CVV"
          required
          className="w-full p-2 border rounded"
          value={formData.cvv}
          onChange={handleChange}
        />
        <input
          type="date"
          name="issueDate"
          required
          className="w-full p-2 border rounded"
          value={formData.issueDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expiryDate"
          required
          className="w-full p-2 border rounded"
          value={formData.expiryDate}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Add Card
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Success!</h3>
            <p className="text-gray-700">
              Your card has been successfully added. Your payment will be
              processed right away.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}