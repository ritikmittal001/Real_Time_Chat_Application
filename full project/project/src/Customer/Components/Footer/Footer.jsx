import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const sections = [
  {
    title: "Company",
    links: ["About", "Blog", "Press", "Job", "Partner"],
  },
  {
    title: "Solutions",
    links: ["Marketing", "Analytics", "Commerce", "Insight", "Support"],
  },
  {
    title: "Documentation",
    links: ["Guides", "API Status"],
  },
  {
    title: "Legal",
    links: ["Claim", "Privacy", "Terms"],
  },
  // Add more sections here if needed
];

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white text-center mt-10"
      container
      spacing={3}
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      {sections.map((section, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            {section.title}
          </Typography>
          {section.links.map((link, linkIndex) => (
            <div key={linkIndex}>
              <Button className="pb-5" variant="h6" gutterBottom>
                {link}
              </Button>
            </div>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Footer;
