// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Kenny Liu. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
