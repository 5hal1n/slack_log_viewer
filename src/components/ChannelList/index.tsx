import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import db from "@/libs/db";

const ChannelList = async () => {
  const channels = await db
    .selectFrom("channel")
    .select(["name", "id"])
    .orderBy("name")
    .execute();

  return (
    <List disablePadding>
      {channels.map((channel) => (
        <ListItem key={channel.id}>
          <ListItemButton LinkComponent={Link} href={`/${channel.id}`}>
            <ListItemText primary={channel.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ChannelList;
