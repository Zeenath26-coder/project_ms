import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  DashboardSquare02Icon,
  Home01Icon,
  ToolsIcon,
  UserGroupIcon,
  UserIcon,
  Settings02Icon,
  Logout01Icon,
  Menu01Icon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";

export const expandedWidth = 225;
export const collapsedWidth = 64;

const mainNavItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashboardSquare02Icon,
  },
  {
    label: "Properties",
    path: "/properties",
    icon: Home01Icon,
  },
  {
    label: "Maintenance",
    path: "/maintenance",
    icon: ToolsIcon,
  },
  {
    label: "Tenants",
    path: "/tenants",
    icon: UserGroupIcon,
  },
];

const accountNavItems = [
  {
    label: "My Profile",
    path: "/profile",
    icon: UserIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings02Icon,
  },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: SidebarProps) {
  const sidebarWidth = collapsed ? collapsedWidth : expandedWidth;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setMobileOpen(false);
    navigate("/");
  };

  const renderNavItem = (item: {
    label: string;
    path: string;
    icon: typeof DashboardSquare02Icon;
  }) => {
    const navButton = (
      <ListItemButton
        component={NavLink}
        to={item.path}
        sx={{
          position: "relative",
          minHeight: 46,
          width: collapsed ? 46 : "100%",
          mx: "auto",
          mb: 1,
          px: collapsed ? 0 : 1.5,
          borderRadius: "12px",
          justifyContent: collapsed ? "center" : "flex-start",
          color: "#9CA3AF",
          transition: "all 180ms ease",

          "& .MuiListItemIcon-root": {
            minWidth: 0,
            width: collapsed ? "100%" : 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "inherit",
          },

          "& .MuiListItemText-root": {
            margin: 0,
            opacity: collapsed ? 0 : 1,
            width: collapsed ? 0 : "auto",
            overflow: "hidden",
            whiteSpace: "nowrap",
            transition: "opacity 150ms ease",
          },

          "&:hover": {
            backgroundColor: "#1F2937",
            color: "#FFFFFF",
          },

          "&.active": {
            backgroundColor: "#374151",
            color: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
          },

          "&.active:hover": {
            backgroundColor: "#1F2937",
          },
        }}
      >
        <ListItemIcon>
          <HugeiconsIcon icon={item.icon} size={21} strokeWidth={1.6} />
        </ListItemIcon>

        <ListItemText
          primary={item.label}
          slotProps={{
            primary: {
              sx: {
                fontSize: "13.5px",
                fontWeight: 500,
                letterSpacing: "-0.1px",
              },
            },
          }}
        />
      </ListItemButton>
    );

    if (collapsed) {
      return (
        <Tooltip key={item.path} title={item.label} placement="right" arrow>
          {navButton}
        </Tooltip>
      );
    }

    return <Box key={item.path}>{navButton}</Box>;
  };

  const renderMobileNavItem = (item: {
    label: string;
    path: string;
    icon: typeof DashboardSquare02Icon;
  }) => {
    return (
      <ListItemButton
        key={item.path}
        component={NavLink}
        to={item.path}
        onClick={() => setMobileOpen(false)}
        sx={{
          minHeight: 46,
          mb: 1,
          px: 1.5,
          borderRadius: "12px",
          color: "#9CA3AF",

          "& .MuiListItemIcon-root": {
            minWidth: 42,
            color: "inherit",
          },

          "&:hover": {
            backgroundColor: "#1F2937",
            color: "#FFFFFF",
          },

          "&.active": {
            backgroundColor: "#374151",
            color: "#FFFFFF",
            borderRadius: "10px",
          },

          "&.active:hover": {
            backgroundColor: "#1F2937",
          },
        }}
      >
        <ListItemIcon>
          <HugeiconsIcon icon={item.icon} size={21} strokeWidth={1.6} />
        </ListItemIcon>

        <ListItemText
          primary={item.label}
          slotProps={{
            primary: {
              sx: {
                fontSize: "13.5px",
                fontWeight: 500,
              },
            },
          }}
        />
      </ListItemButton>
    );
  };

  return (
    <>
      <Box
        component="aside"
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          position: "fixed",
          top: 12,
          left: 12,

          width: sidebarWidth,
          height: "calc(100vh - 24px)",

          backgroundColor: "#111827",
          color: "#FFFFFF",

          borderRadius: "19px",
          border: "1px solid #E5EAF0",

          boxShadow: "0 4px 15px rgba(50, 70, 90, 0.08)",

          flexDirection: "column",
          overflow: "hidden",

          zIndex: 1200,

          transition: "width 260ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {!collapsed ? (
          <Box
            sx={{
              height: 64,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: 2,
            }}
          >
            <IconButton
              onClick={() => setCollapsed(true)}
              sx={{
                width: 42,
                height: 42,
                borderRadius: "10px",
                color: "#9CA3AF",

                "&:hover": {
                  backgroundColor: "#1F2937",
                  color: "#FFFFFF",
                },
              }}
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                size={18}
                strokeWidth={1.6}
              />
            </IconButton>
          </Box>
        ) : (
          <Box
            sx={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={() => setCollapsed(false)}
              sx={{
                width: 42,
                height: 42,
                borderRadius: "20px",
                color: "#9CA3AF",

                "&:hover": {
                  backgroundColor: "#1F2937",
                  color: "#FFFFFF",
                },
              }}
            >
              <HugeiconsIcon icon={Menu01Icon} size={21} strokeWidth={1.6} />
            </IconButton>
          </Box>
        )}

        <Divider sx={{ borderColor: "#273244" }} />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: collapsed ? 1 : 1.5,

            "&::-webkit-scrollbar": {
              width: 3,
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#374151",
              borderRadius: 10,
            },
          }}
        >
          {!collapsed && (
            <Typography
              sx={{
                px: 1.25,
                pt: 0.75,
                pb: 1.2,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "1.2px",
                color: "#6B7280",
              }}
            >
              MAIN MENU
            </Typography>
          )}

          <List disablePadding>{mainNavItems.map(renderNavItem)}</List>

          {!collapsed && (
            <Typography
              sx={{
                px: 1.25,
                pt: 3,
                pb: 1.2,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "1.4px",
                color: "#6B7280",
              }}
            >
              ACCOUNT
            </Typography>
          )}

          <List disablePadding>{accountNavItems.map(renderNavItem)}</List>
        </Box>

        <Divider sx={{ borderColor: "#273244" }} />

        <Box
          sx={{
            p: collapsed ? 1 : 1.5,
            flexShrink: 0,
          }}
        >
          {collapsed ? (
            <Tooltip title="Logout" placement="right" arrow>
              <ListItemButton
                onClick={handleLogout}
                sx={{
                  minHeight: 46,
                  justifyContent: "center",
                  borderRadius: "12px",
                  color: "#9CA3AF",

                  "& .MuiListItemIcon-root": {
                    minWidth: 0,
                    width: "100%",
                    justifyContent: "center",
                    color: "inherit",
                  },

                  "&:hover": {
                    backgroundColor: "#1F2937",
                    color: "#FFFFFF",
                  },
                }}
              >
                <ListItemIcon>
                  <HugeiconsIcon
                    icon={Logout01Icon}
                    size={21}
                    strokeWidth={1.6}
                  />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          ) : (
            <ListItemButton
              onClick={handleLogout}
              sx={{
                minHeight: 46,
                borderRadius: "12px",
                color: "#9CA3AF",

                "& .MuiListItemIcon-root": {
                  minWidth: 42,
                  color: "inherit",
                },

                "&:hover": {
                  backgroundColor: "#1F2937",
                  color: "#FFFFFF",
                },
              }}
            >
              <ListItemIcon>
                <HugeiconsIcon
                  icon={Logout01Icon}
                  size={21}
                  strokeWidth={1.6}
                />
              </ListItemIcon>

              <ListItemText
                primary="Logout"
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: "13.5px",
                      fontWeight: 500,
                    },
                  },
                }}
              />
            </ListItemButton>
          )}
        </Box>
      </Box>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },

          "& .MuiDrawer-paper": {
            width: 225,
            boxSizing: "border-box",
            backgroundColor: "#111827",
            color: "#FFFFFF",
            border: "none",
            boxShadow: "8px 0 30px rgba(0, 0, 0, 0.18)",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: 64,
              px: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                color: "#9CA3AF",

                "&:hover": {
                  backgroundColor: "#1F2937",
                  color: "#FFFFFF",
                },
              }}
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                size={19}
                strokeWidth={1.6}
              />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: "#273244" }} />

          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 1.5,

              "&::-webkit-scrollbar": {
                width: 3,
              },

              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#374151",
                borderRadius: 10,
              },
            }}
          >
            <Typography
              sx={{
                px: 1.25,
                pt: 0.75,
                pb: 1.2,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "1.2px",
                color: "#6B7280",
              }}
            >
              MAIN MENU
            </Typography>

            <List disablePadding>{mainNavItems.map(renderMobileNavItem)}</List>

            <Typography
              sx={{
                px: 1.25,
                pt: 3,
                pb: 1.2,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "1.4px",
                color: "#6B7280",
              }}
            >
              ACCOUNT
            </Typography>

            <List disablePadding>
              {accountNavItems.map(renderMobileNavItem)}
            </List>
          </Box>

          <Divider sx={{ borderColor: "#273244" }} />

          <Box sx={{ p: 1.5 }}>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                minHeight: 46,
                borderRadius: "12px",
                color: "#9CA3AF",

                "& .MuiListItemIcon-root": {
                  minWidth: 42,
                  color: "inherit",
                },

                "&:hover": {
                  backgroundColor: "#1F2937",
                  color: "#FFFFFF",
                },
              }}
            >
              <ListItemIcon>
                <HugeiconsIcon
                  icon={Logout01Icon}
                  size={21}
                  strokeWidth={1.6}
                />
              </ListItemIcon>

              <ListItemText
                primary="Logout"
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: "13.5px",
                      fontWeight: 500,
                    },
                  },
                }}
              />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
