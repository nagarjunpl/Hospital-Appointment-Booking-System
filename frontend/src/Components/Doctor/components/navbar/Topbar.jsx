import React, { useState } from "react";
import { Box, IconButton, Menu, useTheme, MenuItem, Typography, Avatar } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext} from "../../theme";
import { useNavigate } from "react-router-dom";

import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { PersonOutline } from "@mui/icons-material";


const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate=useNavigate()
  
  const colorMode = useContext(ColorModeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      p: 2,
      backgroundColor: theme.palette.mode === 'light' 
        ? '#ffffff' 
        : 'transparent',
      borderBottom: theme.palette.mode === 'light'
        ? '1px solid #e0e0e0'
        : '1px solid rgba(255, 255, 255, 0.12)',
      boxShadow: theme.palette.mode === 'light'
        ? '0 2px 4px rgba(0,0,0,0.05)'
        : 'none',
    }}>
      <Typography as="h4">
        
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton 
          onClick={colorMode.toggleColorMode}
          sx={{
            backgroundColor: theme.palette.mode === 'light'
              ? 'rgba(25, 118, 210, 0.08)'
              : 'transparent',
            color: theme.palette.mode === 'light'
              ? '#1976d2'
              : '#ffffff',
            "&:hover": {
              backgroundColor: theme.palette.mode === 'light'
                ? 'rgba(25, 118, 210, 0.15)'
                : 'rgba(255, 255, 255, 0.08)',
            }
          }}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>

        <IconButton 
          onClick={handleClick}
          sx={{
            backgroundColor: theme.palette.mode === 'light'
              ? 'rgba(25, 118, 210, 0.08)'
              : 'transparent',
            "&:hover": {
              backgroundColor: theme.palette.mode === 'light'
                ? 'rgba(25, 118, 210, 0.15)'
                : 'rgba(255, 255, 255, 0.08)',
            }
          }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: theme.palette.mode === 'light'
                ? '#1976d2'
                : '#424242',
            }}
          >
            <PersonOutline sx={{ fontSize: 18 }} />
          </Avatar>
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 180,
              borderRadius: "8px",
              boxShadow: theme.palette.mode === 'light'
                ? '0 4px 20px rgba(0,0,0,0.1)'
                : '0 4px 20px rgba(0,0,0,0.3)',
            }
          }}
        >
          <MenuItem
            sx={{
              color: theme.palette.mode === 'light' 
                ? '#d32f2f' 
                : '#f44336',
              "&:hover": {
                backgroundColor: theme.palette.mode === 'light'
                  ? 'rgba(211, 47, 47, 0.08)'
                  : 'rgba(244, 67, 54, 0.08)',
              }
            }}
            onClick={() => {
              localStorage.clear();
              navigate("/")
              window.location.reload("true");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;