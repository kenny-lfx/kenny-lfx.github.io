// src/pages/Home.js
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url(https://source.unsplash.com/random/1920x1080)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          color: "white",
          backdropFilter: "blur(5px)",
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom color="black">
          Welcome to My Personal Website
        </Typography>
        <Typography variant="h5" paragraph color="black">
          I'm Kenny Liu, a passionate developer exploring CS and AI projects.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/projects"
        >
          View My Projects
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
