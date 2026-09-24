import { useLocation, useNavigate } from "react-router-dom";
import profileImage from "../../assests/profile.jpg";
import { HugeiconsIcon } from "@hugeicons/react";
import { properties as mockProperties } from "../../data/properties";
import {
  Search01Icon,
  ArrowDown01Icon,
  UserIcon,
  Settings01Icon,
  Logout01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";

import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Avatar,
  Divider,
  ClickAwayListener,
} from "@mui/material";
import { useState } from "react";
import NotificationDropdown from "../ui/notification-dropdown";
import { CloseRounded } from "@mui/icons-material";

interface HeaderProps {
  onMobileMenuClick: () => void;
}

export function Header({ onMobileMenuClick }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageHeader = () => {
    if (location.pathname === "/dashboard") {
      return {
        title: "Dashboard",
        subtitle: "Property Management",
      };
    }

    if (location.pathname === "/properties") {
      return {
        title: "Properties",
        subtitle: "Property Management",
      };
    }

    if (location.pathname.startsWith("/properties/")) {
      const propertyId = location.pathname.split("/")[2];

      const property = mockProperties.find(
        (property) => property.id === propertyId,
      );

      return {
        title: "Property Details",
        subtitle: property
          ? `${property.name} · ${property.city}`
          : "Property Management",
      };
    }

    if (location.pathname === "/profile") {
      return {
        title: "My Profile",
        subtitle: "Account Settings",
      };
    }

    return {
      title: "Dashboard",
      subtitle: "Property Management",
    };
  };

  const { title: pageTitle, subtitle: pageSubtitle } = getPageHeader();
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const filteredProperties =
    search.trim() === ""
      ? mockProperties
      : mockProperties.filter((property) => {
          const query = search.trim().toLowerCase();

          return (
            property.name.toLowerCase().includes(query) ||
            property.id.toLowerCase().includes(query) ||
            property.city.toLowerCase().includes(query) ||
            property.type.toLowerCase().includes(query)
          );
        });

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        minHeight: {
          xs: 58,
          sm: 62,
          md: 64,
        },
        px: {
          xs: 1,
          sm: 1.5,
          md: 2.5,
        },
        py: {
          xs: 0.75,
          sm: 0,
        },

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5EAF0",
        boxShadow: "0 2px 8px rgba(50, 70, 90, 0.05)",
        borderRadius: {
          xs: "12px",
          sm: "14px",
        },
        position: "sticky",
        top: {
          xs: 8,
          sm: 12,
        },
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: 0,
          flex: 1,
        }}
      >
        <IconButton
          onClick={onMobileMenuClick}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            width: 38,
            height: 38,
            mr: 0.5,
            borderRadius: "10px",
            color: "#555555",

            "&:hover": {
              backgroundColor: "#F3F3F1",
            },
          }}
        >
          <HugeiconsIcon icon={Menu01Icon} size={21} strokeWidth={1.6} />
        </IconButton>
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: 15,
                sm: 17,
                md: 19,
              },

              fontWeight: 550,
              letterSpacing: "-0.5px",
              color: "#111111",
              lineHeight: 1.2,

              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: {
                xs: 130,
                sm: 220,
                md: "none",
              },
            }}
          >
            {pageTitle}
          </Typography>

          <Typography
            sx={{
              mt: 0.3,
              fontSize: {
                xs: 9.5,
                sm: 10.5,
                md: 11.5,
              },
              color: "#999999",
              fontWeight: 450,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",

              maxWidth: {
                xs: 130,
                sm: 220,
                md: 400,
              },
            }}
          >
            {pageSubtitle}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: {
            xs: 0.5,
            sm: 1,
            md: 1,
          },
          flexShrink: 0,
        }}
      >
        <ClickAwayListener onClickAway={() => setSearchFocused(false)}>
          <Box
            sx={{
              position: "relative",
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",
              width: 220,
              height: 40,
              px: 1.5,
              borderRadius: "11px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E8E8E6",
              transition: "all 180ms ease",
              "&:focus-within": {
                backgroundColor: "#FFFFFF",
                borderColor: "#D5D5D2",
                boxShadow: "0 0 0 3px rgba(0,0,0,0.03)",
              },
            }}
          >
            <HugeiconsIcon
              icon={Search01Icon}
              size={18}
              strokeWidth={1.6}
              color="#777777"
            />

            <InputBase
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              placeholder="Search..."
              sx={{
                ml: 1,
                flex: 1,
                fontSize: 13,
                color: "#111111",
                "& input::placeholder": {
                  color: "#999999",
                  opacity: 1,
                },
              }}
            />

            {search ? (
              <IconButton
                size="small"
                onClick={() => {
                  setSearch("");
                  setSearchFocused(false);
                }}
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: "6px",
                  color: "#999999",
                  "&:hover": {
                    color: "#333333",
                    backgroundColor: "#F3F3F1",
                  },
                }}
              >
                <CloseRounded sx={{ fontSize: 17 }} />
              </IconButton>
            ) : (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  borderRadius: "6px",
                  backgroundColor: "#FFFFFF",

                  color: "#999999",
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                /
              </Box>
            )}
            {searchFocused && search.trim() !== "" && (
              <Box
                sx={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  right: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #E5E5E3",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  p: 1,
                  maxHeight: 360,
                  overflowY: "auto",
                  zIndex: 2000,
                }}
              >
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <Box
                      key={property.id}
                      onClick={() => {
                        navigate(`/properties/${property.id}`);
                        setSearch("");
                        setSearchFocused(false);
                      }}
                      sx={{
                        px: 1.5,
                        py: 1.2,
                        borderRadius: "8px",
                        cursor: "pointer",

                        "&:hover": {
                          backgroundColor: "#F5F5F3",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#222222",
                        }}
                      >
                        {property.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#999999",
                          mt: 0.3,
                        }}
                      >
                        {property.id}.{property.city}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{
                      px: 1.5,
                      py: 1.5,
                      fontSize: 12,
                      color: "#999999",
                    }}
                  >
                    No results found
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </ClickAwayListener>

        <IconButton
          onClick={() => setMobileSearchOpen((prev) => !prev)}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            width: 36,
            height: 36,
            borderRadius: "10px",
            color: mobileSearchOpen ? "#222222" : "#555555",
            backgroundColor: mobileSearchOpen ? "#F3F3F1" : "transparent",

            "&:hover": {
              backgroundColor: "#F3F3F1",
            },
          }}
        >
          <HugeiconsIcon icon={Search01Icon} size={20} strokeWidth={1.6} />
        </IconButton>

        {mobileSearchOpen && (
          <Box
            sx={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0,
              right: 0,
              p: 1.2,
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5EAF0",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              zIndex: 3000,
              display: {
                xs: "flex",
                md: "none",
              },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: 42,
                px: 1.5,
                border: "1px solid #E8E8E6",
                borderRadius: "10px",
              }}
            >
              <HugeiconsIcon
                icon={Search01Icon}
                size={18}
                strokeWidth={1.6}
                color="#777777"
              />

              <InputBase
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search properties..."
                sx={{
                  ml: 1,
                  flex: 1,
                  fontSize: 13,

                  "& input::placeholder": {
                    color: "#999999",
                    opacity: 1,
                  },
                }}
              />

              {search && (
                <IconButton
                  size="small"
                  onClick={() => setSearch("")}
                  sx={{
                    width: 28,
                    height: 28,
                    color: "#999999",
                  }}
                >
                  <CloseRounded sx={{ fontSize: 17 }} />
                </IconButton>
              )}
            </Box>

            {search.trim() !== "" && (
              <Box
                sx={{
                  maxHeight: 280,
                  overflowY: "auto",
                }}
              >
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((property) => (
                    <Box
                      key={property.id}
                      onClick={() => {
                        navigate(`/properties/${property.id}`);
                        setSearch("");
                        setMobileSearchOpen(false);
                      }}
                      sx={{
                        px: 1.5,
                        py: 1.2,
                        borderRadius: "8px",
                        cursor: "pointer",

                        "&:hover": {
                          backgroundColor: "#F5F5F3",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#222222",
                        }}
                      >
                        {property.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#999999",
                          mt: 0.3,
                        }}
                      >
                        {property.id} . {property.city}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{
                      px: 1.5,
                      py: 1.5,
                      fontSize: 12,
                      color: "#999999",
                    }}
                  >
                    No results found
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        )}
        <NotificationDropdown />

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: 28,
            mx: {
              xs: 0.5,
              sm: 1,
            },
            borderColor: "#E5E5E3",
          }}
        />
        <ClickAwayListener onClickAway={() => setProfileOpen(false)}>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              onClick={() => setProfileOpen((prev) => !prev)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                pl: 0.5,
                pr: 0.8,
                py: 0.4,
                cursor: "pointer",
                borderRadius: "12px",
                transition: "background-color 180ms ease",

                "&:hover": {
                  backgroundColor: "#F5F5F3",
                },
              }}
            >
              <Avatar
                src={profileImage}
                alt="Mia"
                sx={{
                  width: 36,
                  height: 36,
                  border: "2px solid #E8E8E6",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                  minWidth: 70,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: "#222222",
                    lineHeight: 1.2,
                  }}
                >
                  Mia
                </Typography>

                <Typography
                  sx={{
                    mt: 0.25,
                    fontSize: 10.5,
                    color: "#999999",
                    lineHeight: 1.2,
                  }}
                >
                  Administrator
                </Typography>
              </Box>

              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={16}
                  strokeWidth={1.6}
                  color="#777777"
                  style={{
                    transform: profileOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 180ms ease",
                  }}
                />
              </Box>
            </Box>

            {profileOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  width: {
                    xs: "calc(100vw -24px)",
                    sm: 240,
                  },
                  maxWidth: 300,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "14px",
                  boxShadow: "0 12px 35px rgba(0, 0, 0, 0.10)",
                  overflow: "hidden",
                  zIndex: 2000,
                }}
              >
                <Box
                  sx={{
                    px: 2,
                    py: 1.7,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                    }}
                  >
                    <Avatar
                      src={profileImage}
                      alt="Mia"
                      sx={{
                        width: {
                          xs: 34,
                          sm: 36,
                        },
                        height: {
                          xs: 34,
                          sm: 36,
                        },
                        border: "2px solid #E8E8E6",
                        objectFit: "cover",
                      }}
                    />

                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#222222",
                        }}
                      >
                        Mia Mary
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 11,
                          color: "#999999",
                          mt: 0.2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        mia.mary@zestate.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ borderColor: "#EEEEEE" }} />

                <Box
                  onClick={() => {
                    navigate("/profile");
                    setProfileOpen(false);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    px: 2,
                    py: 1.2,
                    cursor: "pointer",
                    transition: "background-color 150ms ease",

                    "&:hover": {
                      backgroundColor: "#F7F7F7",
                    },
                  }}
                >
                  <HugeiconsIcon
                    icon={UserIcon}
                    size={18}
                    strokeWidth={1.6}
                    color="#666666"
                  />

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#333333",
                      fontWeight: 500,
                    }}
                  >
                    My Profile
                  </Typography>
                </Box>

                <Box
                  onClick={() => {
                    navigate("/settings");
                    setProfileOpen(false);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    px: 2,
                    py: 1.2,
                    cursor: "pointer",
                    transition: "background-color 150ms ease",

                    "&:hover": {
                      backgroundColor: "#F7F7F7",
                    },
                  }}
                >
                  <HugeiconsIcon
                    icon={Settings01Icon}
                    size={18}
                    strokeWidth={1.6}
                    color="#666666"
                  />

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#333333",
                      fontWeight: 500,
                    }}
                  >
                    Settings
                  </Typography>
                </Box>

                <Divider sx={{ borderColor: "#EEEEEE", my: 0.5 }} />

                <Box
                  onClick={() => {
                    localStorage.removeItem("isAuthenticated");
                    setProfileOpen(false);

                    navigate("/");
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    px: 2,
                    py: 1.2,
                    cursor: "pointer",
                    transition: "background-color 150ms ease",

                    "&:hover": {
                      backgroundColor: "#FFF7F7",
                    },
                  }}
                >
                  <HugeiconsIcon
                    icon={Logout01Icon}
                    size={18}
                    strokeWidth={1.6}
                    color="#777777"
                  />

                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#555555",
                      fontWeight: 500,
                    }}
                  >
                    Sign out
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </ClickAwayListener>
      </Box>
    </Box>
  );
}
