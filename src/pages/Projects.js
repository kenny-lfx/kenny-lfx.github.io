// src/pages/Projects.js
import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DevInk",
    description: "A webpage-oriented note-taking Chrome extension for developers.",
    link: "https://github.com/cse210-fa24-group14/cse210-fa24-group14",
  },
  {
    title: "QuickBite",
    description: "A React and Springboot-based online food ordering system with optimized AWS deployment.",
    link: "https://github.com/kenny-lfx/quick-bite",
  },
  {
    title: "ConnectAI",
    description: "An AI-driven social networking platform with ElasticSearch and DALL-E 3 integration.",
    link: "https://github.com/kenny-lfx/connectai",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Box
        id="projects"
        sx={{
          py: 6,
          px: 4,
          backgroundColor: "#1E1E1E",
          color: "#fff",
          scrollMarginTop: "64px", // Ensures proper scrolling offset
        }}
      >
        <Typography variant="h3" gutterBottom textAlign="center">
          My Projects
        </Typography>
        <Container>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    border: "1px solid #333",
                    borderRadius: 2,
                    p: 3,
                    textAlign: "center",
                    backgroundColor: "#242424",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {project.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Projects;
