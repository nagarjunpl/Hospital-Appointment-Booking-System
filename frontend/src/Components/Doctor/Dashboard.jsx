import React from 'react';
import Topbar from "./components/navbar/Topbar";
import Sidebar1 from "./components/navbar/Sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import EditProfile from './components/EditProfile';
import Users from './components/Users';
import { Routes, Route } from 'react-router-dom'
import Report from './components/Report';
import Profile from './components/Profile';

const DDashboard = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: theme.palette.mode === 'dark' 
              ? theme.palette.background.default 
              : '#f5f7fa',
          }}
        >
          <Sidebar1 />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: theme.palette.mode === 'dark' 
                ? theme.palette.background.default 
                : '#f8fafc',
            }}
          >
            <Topbar />
            
            <Box 
              component="main" 
              className="content" 
              sx={{ 
                flex: 1,
                p: 3,
                backgroundColor: theme.palette.mode === 'dark' 
                  ? theme.palette.background.default 
                  : '#ffffff',
                borderRadius: '8px',
                mx: 2,
                my: 2,
                boxShadow: theme.palette.mode === 'dark'
                  ? 'none'
                  : '0 2px 10px rgba(0,0,0,0.05)',
                border: theme.palette.mode === 'dark'
                  ? '1px solid rgba(255,255,255,0.1)'
                  : '1px solid rgba(0,0,0,0.05)',
              }}
            >
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/users" element={<Users />} />
                <Route path="/report/:id" element={<Report />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default DDashboard;