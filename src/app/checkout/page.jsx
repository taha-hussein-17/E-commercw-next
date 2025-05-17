'use client';
import { useState } from 'react';

export default function CheckoutPage() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // تنفيذ عملية الدفع
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">إتمام الشراء</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="العنوان"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          تأكيد الطلب
        </button>
      </form>
    </div>
  );
}
