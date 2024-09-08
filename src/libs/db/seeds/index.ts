"use server";

import db from "../index";
import channels from "./data/channels";

const insertSeeds = async () => {
  await db.schema
    .createTable("channel")
    .ifNotExists()
    .addColumn("id", "varchar(255)", (cb) => cb.primaryKey())
    .addColumn("name", "varchar(255)", (cb) => cb.notNull().unique())
    .execute();

  await db.insertInto("channel").values(channels).execute();
};

export default insertSeeds;
