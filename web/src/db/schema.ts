import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  type AnyPgColumn,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  email: text("email").notNull().unique(),

  password: text("password").notNull(),

  role: text("role").notNull().default("STUDENT"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const homeworks = pgTable("homeworks", {
  id: serial("id").primaryKey(),

  title: text("title").notNull(),

  description: text("description").notNull(),

  createdBy: integer("created_by")
    .notNull()
    .references(() => users.id),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const solutions = pgTable("solutions", {
  id: serial("id").primaryKey(),

  homeworkId: integer("homework_id")
    .notNull()
    .references(() => homeworks.id),

  userId: integer("user_id")
    .notNull()
    .references(() => users.id),

  type: text("type").notNull(),

  content: text("content").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),

  solutionId: integer("solution_id")
    .references(() => solutions.id),

  homeworkId: integer("homework_id")
    .references(() => homeworks.id),

  userId: integer("user_id")
    .notNull()
    .references(() => users.id),

parentId: integer("parent_id").references((): AnyPgColumn => comments.id),
  content: text("content").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});