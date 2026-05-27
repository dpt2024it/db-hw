import { redirect } from "next/navigation";

import { getCurrentUser } from "@/src/lib/auth/get-user";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login-test");
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <pre className="mt-6">
        {JSON.stringify(user, null, 2)}
      </pre>
    </main>
  );
}