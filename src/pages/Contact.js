// src/pages/Contact.js
import React from "react";
import { Box, Typography, Container, Grid2 } from "@mui/material";
//import Grid2 from "@mui/material/Unstable_Grid2"; // Import Grid2 for layout
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Box
        id="contact"
        sx={{
          py: 6,
          px: 4,
          backgroundColor: "#121212",
          color: "#fff",
          scrollMarginTop: "64px", // Adjust for fixed header
        }}
      >
        <Container maxWidth="lg">
          <Grid2 container spacing={4} alignItems="center">
            {/* Left Column: Title */}
            <Grid2 xs={12} md={6}>
              <Typography variant="h3" sx={{ textAlign: "left" }}>
                Contact Me
              </Typography>
            </Grid2>

            {/* Right Column: Contact Methods */}
            <Grid2 xs={12} md={6}>
              <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
                Let’s connect! You can reach me via email, LinkedIn, or GitHub.
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ textAlign: "left" }}>
                Email:{" "}
                <a
                  href="mailto:lfx1825040387@gmail.com"
                  style={{ color: "#bb86fc", textDecoration: "none" }}
                >
                  lfx1825040387@gmail.com
                </a>
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ textAlign: "left" }}>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/fengxu-liu-a0a09a290"
                  style={{ color: "#bb86fc", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/fengxu-liu-a0a09a290
                </a>
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ textAlign: "left" }}>
                GitHub:{" "}
                <a
                  href="https://www.github.com/kenny-lfx"
                  style={{ color: "#bb86fc", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/kenny-lfx
                </a>
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Contact;
