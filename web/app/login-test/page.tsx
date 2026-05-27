"use client";

import { useState } from "react";

export default function LoginTestPage() {
  const [result, setResult] = useState("");

  async function handleLogin() {
    const response = await fetch("/api/auth/login", {
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
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Test Login
      </button>

      <pre className="mt-6 whitespace-pre-wrap">
        {result}
      </pre>
    </main>
  );
}