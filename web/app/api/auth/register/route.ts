import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db } from "../../../../src/db";
import { users } from "../../../../src/db/schema";

import { hashPassword, generateToken } from "../../../../src/lib/auth/auth";

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

if (existingUsers.length > 0) {
  return NextResponse.json(
    { error: "Email already exists" },
    { status: 400 }
  );
}

    const hashedPassword = await hashPassword(password);

    const insertedUsers = await db
      .insert(users)
      .values({
        email,
        password: hashedPassword,
      })
      .returning();

    const user = insertedUsers[0];

    const token = generateToken({
      userId: user.id,
      role: user.role,
    });

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Register failed" },
      { status: 500 }
    );
  }
}
