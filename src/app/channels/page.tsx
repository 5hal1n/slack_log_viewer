import { Paper, Typography } from "@mui/material";

const ChannelPage = () => {
  return (
    <Paper variant="outlined" sx={{ p: 2, m: 2 }}>
      <Typography variant="h4" component="h1">
        Welcome to 貴族会SlackLogViewer
      </Typography>
      <Typography variant="body1">
        サイドバーのチャンネル一覧から、気になるチャンネルを見てみよう
      </Typography>
    </Paper>
  );
};

export default ChannelPage;
