import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import messages from "@/data/messages.json";
import users from "@/data/users.json";
import { format, fromUnixTime } from "date-fns";

const ChannelMessagePage = () => {
  return (
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
  );
};

export default ChannelMessagePage;
