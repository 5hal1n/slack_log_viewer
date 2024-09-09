import { createKysely } from "@vercel/postgres-kysely";

type ChannelTable = {
  id: string;
  name: string;
};

type MessageTable = {
  channelId: string;
  userId: string;
  content: string;
  ts: number;
};

type UserTable = {
  id: string;
  name: string;
  avatarUrl: string;
};

type Database = {
  channel: ChannelTable;
  message: MessageTable;
  user: UserTable;
};

const db = createKysely<Database>({
  connectionString: process.env.POSTGRES_URL,
});

export default db;
