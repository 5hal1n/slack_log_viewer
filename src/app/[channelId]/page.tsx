import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
} from "@mui/material";
import messages from "@/data/messages.json";
import users from "@/data/users.json";
import { format, fromUnixTime } from "date-fns";

const ChannelPage = () => {
  return (
    <main sx={{ flexGrow: 1 }}>
      <Toolbar />
      <List>
        {messages.map((message) => {
          const user = users.find((v) => v.id === message.user);
          return (
            <ListItem key={message.ts}>
              <ListItemAvatar>
                <Avatar
                  alt={message.username}
                  src={user?.profile.image_72}
                  variant="rounded"
                />
              </ListItemAvatar>
              <ListItemText
                primary={message.text}
                secondary={`${user?.name} : ${format(
                  fromUnixTime(Number.parseFloat(message.ts)),
                  "yyyy/MM/dd hh:mm"
                )}`}
              />
            </ListItem>
          );
        })}
      </List>
    </main>
  );
};

export default ChannelPage;
