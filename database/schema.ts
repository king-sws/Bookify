
import {
    varchar,
    uuid,
    text,
    pgTable,
    timestamp,
    pgEnum,
    date,
  } from "drizzle-orm/pg-core";
  
  export const STATUS_ENUM = pgEnum("status", ["PENDING", "APPROVED", "REJECTED"]);
  export const ROLE_ENUM = pgEnum("role", ["USER", "ADMIN"]);
  export const BORROW_STATUS_ENUM = pgEnum("borrow_status", ["BORROWED", "RETURNED"]);
  
  export const users = pgTable("users", {
    id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    status: STATUS_ENUM("status").default("PENDING"),
    role: ROLE_ENUM("role").default("USER"),
    lastActiveDate: date("last_active_date").defaultNow(),
    createAt: timestamp("create_at", {withTimezone: true}).defaultNow(),
  });
  