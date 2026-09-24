import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Sidebar, collapsedWidth, expandedWidth } from "./Sidebar";
import { Header } from "./Header";
import { useState } from "react";

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarWidth = collapsed ? collapsedWidth : expandedWidth;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F8F9FB",
      }}
    >

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

  
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          ml: {
            xs: 0,
            md: `${sidebarWidth + 12}px`,
          },
          width: {
            xs: "100%",
            md: `calc(100% - ${sidebarWidth + 12}px)`,
          },
          boxSizing: "border-box",
          px: {
            xs: 1,
            sm: 2,
            md: 3,
          },
          transition: {
            md: "margin-left 260ms cubic-bezier(0.4, 0, 0.2, 1), width 260ms cubic-bezier(0.4, 0, 0.2, 1)",
          },
        }}
      >
        <Header onMobileMenuClick={() => setMobileOpen(true)} />
        <Box
          sx={{
            py: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
