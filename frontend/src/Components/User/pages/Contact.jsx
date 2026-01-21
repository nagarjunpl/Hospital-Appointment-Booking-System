import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  alpha,
  useTheme,
} from '@mui/material';
import { Email, Phone, LocationOn, Send, Map } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      contact,
    };
    try {
      const response = await axios.post('http://localhost:8080/patient/patientmessage', data);
      if (response.status === 200) {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setContact("");
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <Email color="primary" />,
      title: "Email",
      details: "nagarjunpl@gmail.com",
      subtitle: "We'll reply within 24 hours"
    },
    {
      icon: <Phone color="primary" />,
      title: "Phone",
      details: "+91-1234567890",
      subtitle: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <LocationOn color="primary" />,
      title: "Location",
      details: "Mandya, Karnataka",
      subtitle: "Visit our headquarters"
    }
  ];

  return (
    <Box sx={{ 
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      py: { xs: 4, md: 6 }
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 2
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0}
              sx={{
                backgroundColor: 'white',
                borderRadius: 3,
                p: 4,
                height: '100%',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Contact Information
              </Typography>
              
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  sx={{ 
                    mb: 3,
                    border: 'none',
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="flex-start">
                      <Box sx={{ 
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        borderRadius: 2,
                        p: 1.5,
                        mr: 2
                      }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" fontWeight={500}>
                          {info.details}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          {info.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
              
              {/* Address Section */}
              <Box mt={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Our Locations
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center">
                      <LocationOn color="action" sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2">
                        Mandya Main
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center">
                      <LocationOn color="action" sx={{ mr: 1, fontSize: 20 }} />
                      <Typography variant="body2">
                        City Center
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form and Map */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {/* Contact Form */}
              <Grid item xs={12}>
                <Paper 
                  elevation={0}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    p: 4,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                    Send us a Message
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Full Name"
                          variant="outlined"
                          fullWidth
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Email Address"
                          variant="outlined"
                          fullWidth
                          required
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Contact Number"
                          variant="outlined"
                          fullWidth
                          required
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Your Message"
                          variant="outlined"
                          multiline
                          rows={5}
                          fullWidth
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            borderRadius: 2,
                            py: 1.5,
                            px: 4,
                            fontWeight: 600,
                            fontSize: '1rem',
                            textTransform: 'none',
                            boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                            '&:hover': {
                              boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                              transform: 'translateY(-1px)'
                            }
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </Grid>

              {/* Map Section */}
              <Grid item xs={12}>
                <Paper 
                  elevation={0}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                  }}
                >
                  <Box p={3}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Map color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Find Us in Mandya
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" mb={3}>
                      Visit our location in Mandya, Karnataka
                    </Typography>
                  </Box>
                  <Box sx={{ height: 400, width: '100%' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040598613326!2d76.89551467473177!3d12.522799316798133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7034bb6d5e5f%3A0x34be5f7d7e86d02!2sMandya%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1694709428278!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mandya Location Map"
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsPage;