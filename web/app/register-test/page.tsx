"use client";

import { useState } from "react";

export default function RegisterTestPage() {
  const [result, setResult] = useState("");

  async function handleRegister() {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@test.com",
        password: "123456",
      }),
    });

    const data = await response.json();

    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <main className="p-8">
      <button
        onClick={handleRegister}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Test Register
      </button>

      <pre className="mt-6 whitespace-pre-wrap">
        {result}
      </pre>
    </main>
  );
}