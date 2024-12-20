// src/pages/Home.js
import React from "react";
import { Box } from "@mui/material";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <Box>
      {/* About Section */}
      <Box id="about" sx={{ scrollMarginTop: "64px" }}>
        <About />
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ scrollMarginTop: "64px" }}>
        <Projects />
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ scrollMarginTop: "64px" }}>
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
