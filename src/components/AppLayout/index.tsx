import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import ChannelList from "../ChannelList";
import { PropsWithChildren } from "react";

const AppLayout = (props: PropsWithChildren) => {
  return (
    <body sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
      >
        <Toolbar>
          <Typography>貴族会Slack Log Viewer</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          width: 220,
          [`& .MuiDrawer-paper`]: {
            width: 220,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <ChannelList />
      </Drawer>
      <main sx={{ flexGrow: 1 }}>{props.children}</main>
    </body>
  );
};

export default AppLayout;
