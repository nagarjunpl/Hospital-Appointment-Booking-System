import React, { useState } from "react";
import { Box, IconButton, Menu, useTheme, MenuItem, Typography, Avatar } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { useNavigate } from "react-router-dom";

import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";
import { PersonOutline } from "@mui/icons-material";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate = useNavigate();
  
  const colorMode = useContext(ColorModeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        p: 2,
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(25, 29, 35, 0.95)' 
          : 'rgba(255, 255, 255, 0.95)',
        borderBottom: `1px solid ${
          theme.palette.mode === 'dark' 
          ? 'rgba(255, 255, 255, 0.12)' 
          : 'rgba(0, 0, 0, 0.12)'
        }`,
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Typography 
        as="h4" 
        sx={{ 
          fontWeight: 700,
          fontSize: "1.5rem",
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(45deg, #90caf9, #42a5f5)' 
            : 'linear-gradient(45deg, #1976d2, #0d47a1)',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          ml: 2
        }}
      >
        Healthcare Dashboard
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton 
          onClick={colorMode.toggleColorMode}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'rgba(25, 118, 210, 0.08)',
            color: theme.palette.mode === 'dark' ? '#FFB74D' : '#1976d2',
            borderRadius: "10px",
            p: 1,
            "&:hover": {
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.15)' 
                : 'rgba(25, 118, 210, 0.15)',
            }
          }}
        >
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>

        <IconButton 
          onClick={handleClick}
          sx={{
            backgroundColor: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.08)' 
              : 'rgba(25, 118, 210, 0.08)',
            borderRadius: "10px",
            p: 1,
            "&:hover": {
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.15)' 
                : 'rgba(25, 118, 210, 0.15)',
            }
          }}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              backgroundColor: theme.palette.mode === 'dark' 
                ? '#42a5f5' 
                : '#1976d2',
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
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              "& .MuiMenuItem-root": {
                px: 2,
                py: 1.5,
                fontSize: "14px",
              }
            }
          }}
        >
          <MenuItem
            sx={{
              color: theme.palette.error.main,
              "&:hover": {
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(244, 67, 54, 0.08)' 
                  : 'rgba(244, 67, 54, 0.04)',
              }
            }}
            onClick={() => {
              localStorage.clear();
              navigate("/");
              window.location.reload();
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