import React from "react";
import { Typography, Button, Container, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import img from "../../assets/h1_hero.png"
import { useNavigate } from "react-router-dom";
import Doctor from '../Doctor/Doctorcard';

const StyledSliderArea = styled("div")({
  position: "relative",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
});

const AnimatedSpan = styled('span')({
  color: "#070b0fff",
  fontWeight: "800",
  animation: "fadeIn 1s ease-in-out",
  display: "inline-block",
  padding: "0 8px",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});

const Screen = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const words = ["Health", "Well-being", "Recovery", "Care", "Safety"];
    const [currentIndex, setCurrentIndex] = React.useState(0);
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
    
      return () => {
        clearInterval(interval);
      };
    }, []);
    
    const currentword = words[currentIndex];
    
  return (
    <StyledSliderArea>
      <Container maxWidth="lg">
        <Box sx={{ 
          textAlign: "center",
          color: "white",
          padding: { xs: "20px", md: "40px" },
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: "10px",
        }}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  marginBottom: "20px",
                }}
              >
                Committed to Excellence in Healthcare
              </Typography>
              
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
                  fontWeight: "700",
                  lineHeight: "1.2",
                  marginBottom: "20px",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                We Care About Your
                <Box component="span" sx={{ display: "block", marginTop: "10px" }}>
                  <AnimatedSpan>{currentword}</AnimatedSpan>
                </Box>
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: "1.6",
                  marginBottom: "30px",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                  maxWidth: "800px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Efficient hospital management system streamlining operations, 
                enhancing patient care, and optimizing resource allocation for 
                better healthcare delivery.
              </Typography>
              
              <Box sx={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "20px", 
                flexWrap: "wrap",
                marginTop: "30px" 
              }}>
                <Button
                  variant="contained"
                  onClick={() => navigate("/Doctor")} // Now this will work
                  sx={{
                    padding: "12px 30px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "5px",
                    backgroundColor: "#1976d2",
                    "&:hover": {
                      backgroundColor: "#1565c0",
                    },
                  }}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => navigate("/contact")} // Optional: Add navigation here too
                  sx={{
                    padding: "12px 30px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "5px",
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "#1976d2",
                      backgroundColor: "rgba(25, 118, 210, 0.1)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledSliderArea>
  );
};

export default Screen;