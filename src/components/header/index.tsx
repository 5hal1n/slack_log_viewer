import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar component="div" position="fixed" elevation={1}>
      <Toolbar variant="dense">
        <IconButton></IconButton>
        <Typography variant="h6" component="h1">
          Kizokukai
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
