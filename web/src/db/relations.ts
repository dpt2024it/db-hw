import { relations } from "drizzle-orm";

import {
  users,
  homeworks,
  solutions,
  comments,
} from "./schema";

export const usersRelations = relations(users, ({ many }) => ({
  homeworks: many(homeworks),
  solutions: many(solutions),
  comments: many(comments),
}));

export const homeworksRelations = relations(
  homeworks,
  ({ one, many }) => ({
    creator: one(users, {
      fields: [homeworks.createdBy],
      references: [users.id],
    }),

    solutions: many(solutions),

    comments: many(comments),
  })
);

export const solutionsRelations = relations(
  solutions,
  ({ one, many }) => ({
    homework: one(homeworks, {
      fields: [solutions.homeworkId],
      references: [homeworks.id],
    }),

    user: one(users, {
      fields: [solutions.userId],
      references: [users.id],
    }),

    comments: many(comments),
  })
);

export const commentsRelations = relations(
  comments,
  ({ one, many }) => ({
    user: one(users, {
      fields: [comments.userId],
      references: [users.id],
    }),

    solution: one(solutions, {
      fields: [comments.solutionId],
      references: [solutions.id],
    }),

    homework: one(homeworks, {
      fields: [comments.homeworkId],
      references: [homeworks.id],
    }),

    parent: one(comments, {
      fields: [comments.parentId],
      references: [comments.id],
      relationName: "comment_replies",
    }),

    replies: many(comments, {
      relationName: "comment_replies",
    }),
  })
);