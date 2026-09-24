import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { StatusChip } from "../common/StatusChip";
import DeletePropertyDialog from "../property/DeletePropertyDialog";

import { useProperties } from "@/context/PropertyContext";

export function RecentProperties() {
  const navigate = useNavigate();
  const { properties, deleteProperty } = useProperties();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
    null,
  );
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const recentProperties = [...properties];

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    propertyId: string,
  ) => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
    setSelectedPropertyId(propertyId);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };
  const handleDeleteClick = () => {
    handleMenuClose();
    setDeleteDialogOpen(true);
  };
  const handleDelete = () => {
    if (!selectedPropertyId) {
      return;
    }
    deleteProperty(selectedPropertyId);
    setDeleteDialogOpen(false);
    setSelectedPropertyId(null);
  };
  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setSelectedPropertyId(null);
  };
  const selectedProperty = properties.find(
    (property) => property.id === selectedPropertyId,
  );

  return (
    <>
      <Box
        sx={{
          mt: 3,
          width: "100%",
          minWidth: 0,
          backgroundColor: "#FFFFFF",
          border: "1px solid #E7E7E7",
          borderRadius: {
            xs: "14px",
            sm: "16px",
          },
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(50, 70, 90, 0.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            px: {
              xs: 1.8,
              sm: 2.2,
              md: 3,
            },
            py: {
              xs: 2,
              sm: 2.4,
              md: 2.8,
            },
            borderBottom: "1px solid #EEEEEE",
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "20px",
                },
                fontWeight: 700,
                color: "#1F2937",
                letterSpacing: "-0.3px",
                lineHeight: 1.25,
              }}
            >
              Recent Properties
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "11px",
                  sm: "12px",
                  md: "13px",
                },
                color: "#6B7280",
                mt: 0.5,
                whiteSpace: {
                  xs: "nowrap",
                  sm: "normal",
                },
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Recently added and updated listings
            </Typography>
          </Box>

          <Button
            onClick={() => navigate("/properties")}
            endIcon={
              <ArrowForwardIosIcon
                sx={{
                  fontSize: "10px !important",
                }}
              />
            }
            sx={{
              flexShrink: 0,
              minWidth: "auto",
              textTransform: "none",
              color: "#333333",
              fontSize: {
                xs: "11px",
                sm: "12px",
                md: "13px",
              },
              fontWeight: 600,
              px: {
                xs: 0.8,
                sm: 1,
              },
              py: 0.7,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#F7F7F7",
              },
            }}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            px: {
              xs: 1,
              sm: 1.2,
              md: 1.5,
            },
            py: {
              xs: 0.8,
              sm: 1,
            },
          }}
        >
          {recentProperties.map((property, index) => (
            <Box
              key={property.id}
              onClick={() =>
                navigate(`/properties/${property.id}`, {
                  state: {
                    from: "dashboard",
                  },
                })
              }
              sx={{
                display: {
                  xs: "grid",
                  sm: "flex",
                },
                gridTemplateColumns: {
                  xs: "92px minmax(0, 1fr)",
                  sm: "none",
                },
                alignItems: {
                  xs: "start",
                  sm: "center",
                },
                gap: {
                  xs: 1.5,
                  sm: 2,
                  md: 2.5,
                },
                px: {
                  xs: 0.8,
                  sm: 1,
                  md: 1.5,
                },
                py: {
                  xs: 1.3,
                  sm: 1.4,
                  md: 1.5,
                },

                borderBottom:
                  index !== recentProperties.length - 1
                    ? "1px solid #EEEEEE"
                    : "none",
                borderRadius: "10px",
                transition: "background-color 180ms ease",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: 92,
                    sm: 125,
                    md: 145,
                    lg: 155,
                  },
                  height: {
                    xs: 92,
                    sm: 82,
                    md: 92,
                    lg: 100,
                  },
                  flexShrink: 0,
                  overflow: "hidden",
                  borderRadius: {
                    xs: "9px",
                    sm: "10px",
                  },
                  backgroundColor: "#F3F3F3",
                }}
              >
                <Box
                  component="img"
                  src={property.image?.[0]}
                  alt={property.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 350ms ease",

                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "14px",
                      md: "15px",
                      lg: "16px",
                    },
                    fontWeight: 700,
                    color: "#111111",
                    lineHeight: 1.3,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {property.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                      md: "12px",
                    },
                    color: "#858585",
                    mt: 0.5,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {property.city}

                  <Box
                    component="span"
                    sx={{
                      mx: 0.7,
                      color: "#C0C0C0",
                    }}
                  >
                    •
                  </Box>

                  {property.type}
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "11px",
                    },

                    color: "#666666",

                    mt: {
                      xs: 1,
                      sm: 1.1,
                    },
                  }}
                >
                  {property.area} m²
                </Typography>
              </Box>

              <Box
                sx={{
                  width: {
                    xs: "auto",
                    sm: 105,
                    md: 115,
                    lg: 125,
                  },
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 0.8,
                  gridColumn: {
                    xs: "2",
                    sm: "auto",
                  },
                  mt: {
                    xs: 0.5,
                    sm: 0,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "16px",
                      lg: "17px",
                    },
                    fontWeight: 700,
                    color: "#111111",
                    letterSpacing: "-0.3px",
                    lineHeight: 1.2,
                  }}
                >
                  ${property.monthlyRent}
                  <Box
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "9px",
                        sm: "10px",
                        md: "11px",
                      },
                      fontWeight: 500,
                      color: "#888888",
                      ml: 0.3,
                    }}
                  >
                    /mo
                  </Box>
                </Typography>

                <StatusChip status={property.status} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.2,
                  gridColumn: {
                    xs: "2",
                    sm: "auto",
                  },
                  mt: {
                    xs: -0.5,
                    sm: 0,
                  },
                }}
              >
                <IconButton
                  size="small"
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/properties/${property.id}/edit`, {
                      state: {
                        from: "dashboard",
                      },
                    });
                  }}
                  sx={{
                    width: {
                      xs: 30,
                      sm: 32,
                    },
                    height: {
                      xs: 30,
                      sm: 32,
                    },
                    color: "#555555",
                    "&:hover": {
                      backgroundColor: "#F0F0F0",
                      color: "#111111",
                    },
                  }}
                >
                  <EditOutlinedIcon
                    sx={{
                      fontSize: {
                        xs: 16,
                        sm: 17,
                      },
                    }}
                  />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={(event) => handleMenuOpen(event, property.id)}
                  sx={{
                    width: {
                      xs: 30,
                      sm: 32,
                    },
                    height: {
                      xs: 30,
                      sm: 32,
                    },
                    color: "#777777",
                    "&:hover": {
                      backgroundColor: "#F0F0F0",
                      color: "#111111",
                    },
                  }}
                >
                  <MoreHorizIcon
                    sx={{
                      fontSize: {
                        xs: 18,
                        sm: 20,
                      },
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        onClick={(event) => {
          event.stopPropagation();
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 1,
              minWidth: 160,
              borderRadius: "10px",
              border: "1px solid #EEEEEE",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.09)",
              p: 0.5,
            },
          },
        }}
      >
        <MenuItem
          onClick={handleDeleteClick}
          sx={{
            minHeight: 42,
            borderRadius: "8px",
            fontSize: 14,
            color: "#DC2626",
            px: 1.5,

            "&:hover": {
              backgroundColor: "#FEF2F2",
            },
          }}
        >
          Delete property
        </MenuItem>
      </Menu>

      <DeletePropertyDialog
        open={deleteDialogOpen}
        propertyName={selectedProperty?.name}
        onClose={handleDeleteDialogClose}
        onConfirm={handleDelete}
      />
    </>
  );
}
