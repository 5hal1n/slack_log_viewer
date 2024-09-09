"use server";

import db from "../index";
import channels from "./data/channels";
import users from "./data/users";

const insertSeeds = async () => {
  await db.schema
    .createTable("channel")
    .ifNotExists()
    .addColumn("id", "varchar(255)", (cb) => cb.notNull().unique().primaryKey())
    .addColumn("name", "varchar(255)", (cb) => cb.notNull())
    .execute();

  await db.schema
    .createTable("user")
    .ifNotExists()
    .addColumn("id", "varchar(255)", (cb) => cb.notNull().unique().primaryKey())
    .addColumn("name", "varchar(255)", (cb) => cb.notNull())
    .addColumn("avatarUrl", "text", (cb) => cb.notNull().unique())
    .execute();

  await db.schema
    .createTable("message")
    .ifNotExists()
    .addColumn("id", "varchar(255)", (cb) => cb.notNull().unique().primaryKey())
    .addColumn("channelId", "varchar(255)", (cb) =>
      cb.notNull().references("channel.id")
    )
    .addColumn("userId", "varchar(255)", (cb) =>
      cb.notNull().references("user.id")
    )
    .addColumn("content", "text", (cb) => cb.notNull())
    .execute();

  await db.insertInto("channel").values(channels).execute();
  await db.insertInto("user").values(users).execute();
};

export default insertSeeds;
