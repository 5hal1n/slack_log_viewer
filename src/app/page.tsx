import { Paper, Toolbar, Typography } from "@mui/material";

const Home = () => {
  return (
    <main sx={{ p: 2 }}>
      <Toolbar />
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h2" component="h1">
          Welcome to 貴族会SlackLogViewer
        </Typography>
        <Typography variant="body1">
          サイドバーのチャンネル一覧から、気になるチャンネルを見てみよう
        </Typography>
      </Paper>
    </main>
  );
};

export default Home;
