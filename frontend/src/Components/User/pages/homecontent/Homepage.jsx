import React from "react";
import Screen from "./Slider";
import { Avatar, Grid, Typography, useTheme } from "@mui/material";
import Departments from "./Departments";
import h1_hero from '../../assets/h1_hero.png'
import Image from 'mui-image'
import { Box, fontSize } from "@mui/system";
import Gallery from "./Gallery";

const Homepage = () => {
  const theme = useTheme()

  const departments = [
    { name: "Anesthesiology And Critical Care" },
    { name: "Clinical Biochemistry" },
    { name: "Department of Dermatology" },
    { name: "Microbiology" },
    { name: "Ophthalmology" },
  ];

  return (
    <>
      <Grid container spacing={2} sx={{ backgroundColor: "#f0f7ff" }}>
        <Grid item xs={12} sx={{
          marginBottom: "60px",
          backgroundColor: "#e3f2fd"
        }}>
          <Screen />
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '60px',
            borderRadius: "40px",
            gap: "10px",
            backgroundColor: "#ffffff"
          }}
        >
          <Grid container item sx={{
            minHeight: '80vh',
            backgroundColor: "#f8fdff"
          }} xs={12}>
            <Grid item xs={12} md={5} sx={{ backgroundColor: "#e8f4fe" }}>
              <Image src={h1_hero} shift="top" distance="2rem" shiftDuration={320} fit="cover"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 6,
                backgroundColor: "#f0f9ff",
              }}
            >
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "15px"
              }}>
                <Typography sx={{
                  width: "500px",
                  marginTop: "50px",
                  fontSize: "30px",
                  fontStyle: "italic",
                  color: "#1976d2",
                  backgroundColor: "#e8f4fe",
                  padding: "20px",
                  borderRadius: "10px"
                }}>
                  "Eat clean, stay active, be healthy"
                </Typography>

                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56, backgroundColor: "#1976d2" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            backgroundColor: "#e3f2fd",
            padding: "20px"
          }}
        >
          <Typography
            sx={{
              color: "#1565c0",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "bold",
              backgroundColor: "#ffffff",
              padding: "15px 30px",
              borderRadius: "10px"
            }}
          >
            Gallery
          </Typography>
        </Grid>
        <Grid container item xs={12} sx={{ backgroundColor: "#f5f9ff" }}>
          <Gallery />
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;