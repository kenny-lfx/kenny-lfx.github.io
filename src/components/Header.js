// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: 1300 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Kenny Liu
        </Typography>
        <Box>
          <Button
            color="inherit"
            href="https://github.com/kenny-lfx"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            color="inherit"
            href="https://www.linkedin.com/in/fengxu-liu-a0a09a290"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
