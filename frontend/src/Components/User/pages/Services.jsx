import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
  Button,
  Chip,
  Avatar,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import {
  AccessTime,
  LocalHospital,
  Phone,
  Email,
  People,
  VerifiedUser,
  SupportAgent,
  MedicalServices,
  ArrowForward,
  Close,
  Security,
  VideoCall,
  Language,
} from "@mui/icons-material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmergencyIcon from '@mui/icons-material/LocalHospital'; // Using LocalHospital as Emergency
import ScheduleIcon from '@mui/icons-material/Schedule';

import { useDispatch, useSelector } from "react-redux";
import { getservice } from "../slices/getService";
import Loading from "../Loading";
import Image from "mui-image";

const ServiceItem = ({ image, title, description, features, icon, color }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card 
        onClick={handleOpen} 
        sx={{
          height: "100%",
          minHeight: 380,
          borderRadius: 4,
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia 
            component="img" 
            height="200" 
            image={image} 
            alt={title}
            sx={{
              transition: "transform 0.5s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <Chip
            label="Available"
            color="success"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "#4caf50",
              color: "white",
              fontWeight: 600,
            }}
          />
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar sx={{ bgcolor: color, width: 40, height: 40 }}>
              {icon}
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#2d3436" }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2, height: 60 }}>
            {description.length > 120 ? description.substring(0, 120) + "..." : description}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Button 
              size="small" 
              endIcon={<ArrowForward />}
              sx={{
                color: color,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Learn More
            </Button>
            <Typography variant="caption" color="textSecondary">
              Click for details
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 600, md: 700 },
            maxHeight: "80vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 0,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                bgcolor: "white",
                "&:hover": { bgcolor: "white" },
                zIndex: 2,
              }}
            >
              <Close />
            </IconButton>
            <Image 
              src={image} 
              height={300}
              fit="cover"
              duration={500}
            />
          </Box>
          
          <Box sx={{ p: 4 }}>
            <Box display="flex" alignItems="center" gap={2} mb={3}>
              <Avatar sx={{ bgcolor: color, width: 50, height: 50 }}>
                {icon}
              </Avatar>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#2d3436" }}>
                  {title}
                </Typography>
                <Stack direction="row" spacing={1} mt={1}>
                  <Chip 
                    icon={<AccessTime />} 
                    label="24/7 Available" 
                    size="small" 
                    color="success" 
                  />
                  <Chip 
                    icon={<VerifiedUser />} 
                    label="Certified" 
                    size="small" 
                    variant="outlined" 
                  />
                </Stack>
              </Box>
            </Box>

            <Typography variant="body1" paragraph sx={{ color: "#666" }}>
              {description}
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: "#2d3436", mb: 2 }}>
                Key Features:
              </Typography>
              <Grid container spacing={1}>
                {features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: color }} />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Paper elevation={0} sx={{ p: 3, bgcolor: "#f8f9ff", borderRadius: 3 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, color: "#2d3436" }}>
                Service Availability
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AccessTime sx={{ color: color, fontSize: 20 }} />
                    <Typography variant="body2">24/7 Service</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Phone sx={{ color: color, fontSize: 20 }} />
                    <Typography variant="body2">Emergency Contact</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Phone />}
                    sx={{
                      mt: 2,
                      py: 1.5,
                      borderRadius: 2,
                      bgcolor: color,
                      "&:hover": { bgcolor: color, opacity: 0.9 },
                    }}
                  >
                    Book This Service
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

// Default hospital services data
const defaultHospitalServices = [
  {
    id: 1,
    image: "https://www.shutterstock.com/image-photo/doctor-247-service-assistance-patient-260nw-2329198943.jpg",
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency medical services with immediate response and advanced life support systems.",
    features: ["Immediate Response", "Advanced Life Support", "Emergency Surgery", "Critical Care", "Ambulance Service"],
    icon: <LocalHospital />, // Changed from Emergency to LocalHospital
    color: "#ff6b6b"
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjOL8eab7qyV1Id-7nD30rMOVzJ3kz1G1zQ&s",
    title: "Ambulance Services",
    description: "Fully equipped ambulances with trained paramedics and advanced medical equipment for patient transport.",
    features: ["Advanced Life Support", "GPS Tracking", "Trained Paramedics", "ICU Ambulance", "Air Ambulance"],
    icon: <DirectionsCarIcon />, // Changed to imported icon
    color: "#4ecdc4"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500",
    title: "Doctor Availability",
    description: "Access to 200+ specialist doctors across 50+ departments with flexible appointment scheduling.",
    features: ["200+ Specialists", "50+ Departments", "Video Consultations", "Second Opinions", "Follow-up Care"],
    icon: <People />,
    color: "#45b7d1"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500",
    title: "Patient Support Queries",
    description: "Dedicated patient support team available 24/7 to answer queries and assist with healthcare needs.",
    features: ["24/7 Support", "Multi-language", "Insurance Help", "Billing Queries", "Appointment Help"],
    icon: <SupportAgent />,
    color: "#96ceb4"
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/2154184023/photo/young-female-on-online-therapy-with-psychologist-psychotherapist.jpg?s=612x612&w=0&k=20&c=1cD3otHO_QLZA3z5rvZwlnoHWBz7_u9TlwSAKfaO8vY=",
    title: "Online Consultation",
    description: "Virtual consultations with doctors from the comfort of your home with prescription services.",
    features: ["Video Calls", "Digital Prescription", "Medical Records", "Follow-up", "Chat Support"],
    icon: <VideoCall />,
    color: "#feca57"
  },
  {
    id: 6,
    image: "https://www.felixhospital.com/sites/default/files/2022-03/health-checkup2.png",
    title: "Health Checkup Packages",
    description: "Comprehensive health checkup packages tailored to different age groups and health conditions.",
    features: ["Basic Checkup", "Advanced Screening", "Cardiac Package", "Diabetic Package", "Executive Health"],
    icon: <MedicalServices />,
    color: "#ff9ff3"
  },
  {
    id: 7,
    image: "https://img.freepik.com/free-photo/medical-record-report-healthcare-document-concept_53876-123796.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Medical Records Access",
    description: "Secure digital access to medical records, test results, and treatment history anytime, anywhere.",
    features: ["Digital Records", "Secure Access", "Test Results", "Prescription History", "Family Access"],
    icon: <Security />,
    color: "#54a0ff"
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyBenkS1w3GuR-xoTiebPXkcdUt5ozmrdgQ&s",
    title: "Multi-language Support",
    description: "Healthcare services available in multiple languages with interpreters for international patients.",
    features: ["English", "Hindi", "Kannada", "Interpreters", "International Patients"],
    icon: <Language />,
    color: "#5f27cd"
  }
];

const OurServicesPage = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.service);
  const { service, isLoading, error } = datas;

  useEffect(() => {
    dispatch(getservice());
  }, [dispatch]);

  return (
    <>
      <Loading isloading={isLoading} />
      <Box sx={{ 
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        py: { xs: 4, md: 8 }
      }}>
        <Container maxWidth="xl">
          {/* Header Section */}
          <Box textAlign="center" mb={6}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800, 
                color: "#2d3436", 
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" }
              }}
            >
              Our Comprehensive Services
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "#666", 
                maxWidth: 800, 
                mx: "auto",
                mb: 4 
              }}
            >
              Delivering exceptional healthcare services with compassion, innovation, and expertise
            </Typography>
            
            {/* Quick Stats */}
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                borderRadius: 4,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                maxWidth: 800,
                mx: "auto",
                mb: 6
              }}
            >
              <Grid container spacing={3} textAlign="center">
                <Grid item xs={6} sm={3}>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>24/7</Typography>
                  <Typography variant="body2">Service Hours</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>50+</Typography>
                  <Typography variant="body2">Ambulances</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>20+</Typography>
                  <Typography variant="body2">Doctors</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>10K+</Typography>
                  <Typography variant="body2">Patients Served</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {(service?.user_service?.length > 0 ? service.user_service : defaultHospitalServices).map((service, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={service.id || index}>
                <ServiceItem
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  icon={service.icon || <LocalHospital />}
                  color={service.color || "#1976d2"}
                  price={service.price}
                />
              </Grid>
            ))}
          </Grid>

          {/* Emergency Banner */}
          <Paper 
            elevation={0}
            sx={{ 
              mt: 8, 
              p: 4, 
              borderRadius: 4,
              background: "linear-gradient(145deg, #ff6b6b 0%, #ee5a52 100%)",
              color: "white",
              textAlign: "center"
            }}
          >
            <LocalHospital sx={{ fontSize: 60, mb: 2 }} /> {/* Changed from Emergency to LocalHospital */}
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Emergency Services Available 24/7
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
              Call our emergency helpline for immediate assistance
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              sx={{
                py: 2,
                px: 6,
                borderRadius: 3,
                backgroundColor: "white",
                color: "#ff6b6b",
                fontWeight: 700,
                fontSize: "1.2rem",
                "&:hover": {
                  backgroundColor: "#f8f9fa",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Emergency: +91-9862164447
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default OurServicesPage;