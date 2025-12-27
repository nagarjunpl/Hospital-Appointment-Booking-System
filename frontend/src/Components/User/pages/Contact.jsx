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
} from '@mui/material';
import { Email, Phone, LocationOn, Send, Map, Home } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const navigate = useNavigate();
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
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      py: 8 
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              color: 'white', 
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            We're here to help and answer any questions you might have
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Info Cards */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%', 
              borderRadius: 4,
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: '#2d3436',
                  fontWeight: 600,
                  mb: 4
                }}>
                  Contact Information
                </Typography>
                
                <Box mb={4}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <Box sx={{ 
                      width: 50, 
                      height: 50, 
                      borderRadius: '50%', 
                      backgroundColor: '#e3f2fd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <Email sx={{ color: '#1976d2' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="textSecondary">
                        Email
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#2d3436', fontWeight: 500 }}>
                        peshospital44@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center" mb={3}>
                    <Box sx={{ 
                      width: 50, 
                      height: 50, 
                      borderRadius: '50%', 
                      backgroundColor: '#e8f5e9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <Phone sx={{ color: '#2e7d32' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="textSecondary">
                        Phone
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#2d3436', fontWeight: 500 }}>
                        +91-9862164447
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <Box sx={{ 
                      width: 50, 
                      height: 50, 
                      borderRadius: '50%', 
                      backgroundColor: '#fff3e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <Home sx={{ color: '#ef6c00' }} />
                    </Box>
                    <Box>
                      <Typography variant="body2" color="textSecondary">
                        Address
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#2d3436', fontWeight: 500 }}>
                        Mandya, Karnataka
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                        Main Branch: Mandya City Center
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ 
                  backgroundColor: '#f8f9ff',
                  p: 3,
                  borderRadius: 3,
                  mt: 4
                }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    Working Hours
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2d3436', fontWeight: 500 }}>
                    Monday - Friday: 8:00 AM - 8:00 PM
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#2d3436', fontWeight: 500, mt: 1 }}>
                    Saturday - Sunday: 9:00 AM - 6:00 PM
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card sx={{ 
              borderRadius: 4,
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f7ff 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ 
                  color: '#2d3436',
                  fontWeight: 600,
                  mb: 4
                }}>
                  Send us a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Your Name"
                        variant="outlined"
                        fullWidth
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#ffffff',
                            borderRadius: 3,
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#ffffff',
                            borderRadius: 3,
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Contact Number"
                        variant="outlined"
                        fullWidth
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#ffffff',
                            borderRadius: 3,
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        fullWidth
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#ffffff',
                            borderRadius: 3,
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        variant="contained" 
                        type="submit"
                        startIcon={<Send />}
                        sx={{
                          py: 1.5,
                          px: 4,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          fontSize: '1rem',
                          fontWeight: 600,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card sx={{ 
              mt: 4, 
              borderRadius: 4,
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Box display="flex" alignItems="center" mb={3}>
                  <Box sx={{ 
                    width: 50, 
                    height: 50, 
                    borderRadius: '50%', 
                    backgroundColor: '#e3f2fd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2
                  }}>
                    <Map sx={{ color: '#1976d2' }} />
                  </Box>
                  <Typography variant="h6" sx={{ color: '#2d3436', fontWeight: 600 }}>
                    Find Us on Map
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  borderRadius: 3, 
                  overflow: 'hidden',
                  height: 300,
                  border: '1px solid #e0e0e0'
                }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62208.05770007145!2d76.82821343498572!3d12.522054292931047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ab2c5e5b5c5%3A0x4c8e3e9a3c6b5f5d!2sMandya%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1694709428278!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mandya Location Map"
                  ></iframe>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Quick Contact Banner */}
        <Paper sx={{ 
          mt: 6, 
          p: 4, 
          borderRadius: 4,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.95) 100%)',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h6" sx={{ color: '#2d3436', fontWeight: 600 }}>
                Need immediate assistance?
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mt: 1 }}>
                Call our emergency helpline available 24/7
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign={{ xs: 'left', md: 'right' }}>
              <Button
                variant="contained"
                startIcon={<Phone />}
                sx={{
                  py: 1.5,
                  px: 4,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff5252 0%, #e53935 100%)',
                  }
                }}
              >
                Emergency: +91-9862164447
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactUsPage;