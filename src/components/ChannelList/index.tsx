import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import CHANNELS from "@/data/channels";

const ChannelList = async () => {
  return (
    <List disablePadding>
      {CHANNELS.map((channel) => (
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
