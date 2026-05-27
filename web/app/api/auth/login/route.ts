import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "@/src/db";
import { users } from "@/src/db/schema";

import {
  comparePassword,
  generateToken,
} from "@/src/lib/auth/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const existingUsers = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    const user = existingUsers[0];

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValidPassword = await comparePassword(
      password,
      user.password
    );

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

const response = NextResponse.json({
  success: true,
  user: {
    id: user.id,
    email: user.email,
    role: user.role,
  },
});

response.cookies.set("token", token, {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
  path: "/",
});

return response;
    

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}