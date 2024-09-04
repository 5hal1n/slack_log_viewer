import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Channel } from "@/types/channel";
import Link from "next/link";

const ChannelList = async () => {
  const res = await fetch("http://localhost:3020/channels");
  const channels = (await res.json()) as Channel[];
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
