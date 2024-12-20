// src/pages/About.js

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
//import Grid from "@mui/material/Unstable_Grid2"; // Import Grid2

// Register required Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const About = () => {
  // Radar chart data
  const data = {
    labels: ["Java", "Python", "React", "Spring Boot", "AWS", "Kotlin", "C++"],
    datasets: [
      {
        label: "Skill Proficiency",
        data: [9, 8, 8, 7, 8, 7, 6], // Scores out of 10
        backgroundColor: "rgba(187, 134, 252, 0.2)",
        borderColor: "rgba(187, 134, 252, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(187, 134, 252, 1)",
      },
    ],
  };

  // Radar chart options
  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      r: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 1,
          color: "#fff",
          backdropColor: "#121212",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        pointLabels: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Box
        id="about"
        sx={{
          py: 6,
          px: 4,
          textAlign: "center",
          backgroundColor: "#121212",
          color: "#fff",
          scrollMarginTop: "64px", // Adjust for fixed header
        }}
      >
        <Typography variant="h3" gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "left", paddingLeft: "20px", paddingBottom: "60px" }}
        >
          Hi, I’m Fengxu Liu (Kenny), a developer passionate about CS and AI. I hold a B.Sc. in
          Computer Science from Purdue University (GPA: 3.82/4.0) and I’m pursuing an M.Sc. in
          Computer Science at UCSD (GPA: 4.0/4.0).
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Column: Radar Chart */}
            <Grid
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              <Radar data={data} options={options} width={300} height={300} />
            </Grid>

            {/* Right Column: Verbal Description */}
            <Grid xs={12} md={6} sx={{ textAlign: "left" }}>
              <Typography variant="h4" gutterBottom>
                My Skills
              </Typography>
              <Typography variant="body1" sx={{ paddingTop: "20px" }}>
                <strong>Java & Python:</strong> Proficient in developing scalable backend systems,
                RESTful APIs, and machine learning algorithms.
              </Typography>
              <Typography variant="body1" sx={{ paddingTop: "20px" }}>
                <strong>React & Spring Boot:</strong> Expertise in building dynamic web
                applications with responsive UIs and secure backends.
              </Typography>
              <Typography variant="body1" sx={{ paddingTop: "20px" }}>
                <strong>AWS:</strong> Skilled in deploying cloud-based applications with high
                availability and auto-scaling capabilities.
              </Typography>
              <Typography variant="body1" sx={{ paddingTop: "20px" }}>
                <strong>Kotlin & C++:</strong> Experienced in mobile app development and
                performance-critical software.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default About;
