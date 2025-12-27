import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";
import { Edit, HomeOutlined, Message } from "@mui/icons-material";

import { HelpOutlined } from "@mui/icons-material";

import { MenuOutlined } from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title 
          ? "#ffffff" 
          : theme.palette.mode === 'light' 
            ? "#ffffff"  // White text for light mode (dark background)
            : colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{ 
        color: selected === title 
          ? "#ffffff" 
          : theme.palette.mode === 'light' 
            ? "#ffffff" 
            : colors.grey[100],
      }}>
        {title}
      </Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar1 = () => {
  const Navigate=useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: theme.palette.mode === 'light'
            ? `linear-gradient(180deg, #1976d2 0%, #0d47a1 100%) !important`
            : `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: theme.palette.mode === 'light' 
            ? "#ffffff !important" 
            : "#868dfb !important",
          backgroundColor: theme.palette.mode === 'light'
            ? "rgba(255, 255, 255, 0.1) !important"
            : "transparent !important",
        },
        "& .pro-menu-item.active": {
          color: theme.palette.mode === 'light' 
            ? "#ffffff !important" 
            : "#6870fa !important",
          backgroundColor: theme.palette.mode === 'light'
            ? "rgba(255, 255, 255, 0.2) !important"
            : "transparent !important",
        },
        minHeight: "100vh",
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: theme.palette.mode === 'light' ? "#ffffff" : colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography 
                  variant="h3" 
                  onClick={()=>{
                  Navigate("/")
                }} 
                sx={{
                  color: theme.palette.mode === 'light' ? "#ffffff" : colors.grey[100],
                  fontWeight: "bold",
                  background: theme.palette.mode === 'light'
                    ? "none"
                    : "none",
                }}>
                 Doctor Panel
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}
                  sx={{
                    color: theme.palette.mode === 'light' ? "#ffffff" : colors.grey[100],
                  }}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Users"
              to="/Users"
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Edit Profile"
              to="/editprofile"
              icon={<Edit />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar1;