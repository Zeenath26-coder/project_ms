import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Chip,
} from "@mui/material";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

import { useState } from "react";

import profile from "../../assests/profile.jpg";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState("Mia Mary");
  const [phone, setPhone] = useState("+94 77 123 4567");

  const [savedFullName, setSavedFullName] = useState("Mia Mary");
  const [savedPhone, setSavedPhone] = useState("+94 77 123 4567");

  const handleSave = () => {
    setSavedFullName(fullName);
    setSavedPhone(phone);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFullName(savedFullName);
    setPhone(savedPhone);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
        backgroundColor: "#f8f9fb",
        p: {
          xs: 1.5,
          sm: 2,
          md: 3,
        },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: {
            xs: 1,
            sm: 2,
          },
          mb: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
        }}
      >
        <Box
          sx={{
            minWidth: 0,
            flex: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1f2937",
              fontSize: {
                xs: "1.3rem",
                sm: "1.4rem",
                md: "1.5rem",
              },
              lineHeight: 1.3,
            }}
          >
            My Profile
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#6b7280",
              mt: 0.5,
              fontSize: {
                xs: "0.76rem",
                sm: "0.82rem",
                md: "0.875rem",
              },
              lineHeight: 1.5,
              whiteSpace: {
                xs: "normal",
                sm: "nowrap",
              },
            }}
          >
            Manage your personal and employee information
          </Typography>
        </Box>

        {!isEditing ? (
          <Button
            variant="contained"
            startIcon={<EditRoundedIcon />}
            onClick={() => setIsEditing(true)}
            sx={{
              flexShrink: 0,
              width: "auto",
              minWidth: {
                xs: 0,
                sm: 140,
              },
              whiteSpace: "nowrap",
              backgroundColor: "#fff",
              border: "1px solid #d9d9d9",
              color: "#222",
              textTransform: "none",
              borderRadius: "10px",
              px: {
                xs: 1.3,
                sm: 2.2,
              },
              py: {
                xs: 0.8,
                sm: 1,
              },
              fontWeight: 500,
              fontSize: {
                xs: "0.78rem",
                sm: "0.9rem",
              },
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              "& .MuiButton-startIcon": {
                marginRight: {
                  xs: 0.5,
                  sm: 0.8,
                },
                "& svg": {
                  fontSize: {
                    xs: "17px",
                    sm: "20px",
                  },
                },
              },
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#c7c7c7",
                boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              },
            }}
          >
            Edit Profile
          </Button>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: {
                xs: 0.7,
                sm: 1,
              },
              flexShrink: 0,
            }}
          >
            <Button
              type="button"
              onClick={handleCancel}
              sx={{
                minWidth: {
                  xs: 68,
                  sm: 90,
                },
                px: {
                  xs: 1,
                  sm: 1.5,
                },
                textTransform: "none",
                color: "#52525B",
                border: "1px solid #d9d9d9",
                borderRadius: "10px",
                py: {
                  xs: 0.8,
                  sm: 1,
                },
                fontSize: {
                  xs: "0.78rem",
                  sm: "0.875rem",
                },
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  borderColor: "#c7c7c7",
                },
              }}
            >
              Cancel
            </Button>

            <Button
              type="button"
              onClick={handleSave}
              sx={{
                minWidth: {
                  xs: 105,
                  sm: 125,
                },

                px: {
                  xs: 1,
                  sm: 1.5,
                },

                backgroundColor: "#2a2d31e9",
                color: "#fff",
                textTransform: "none",
                borderRadius: "10px",

                py: {
                  xs: 0.8,
                  sm: 1,
                },

                fontSize: {
                  xs: "0.78rem",
                  sm: "0.875rem",
                },

                boxShadow: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#4B5563",
                  boxShadow: "none",
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        )}
      </Box>

      <Card
        sx={{
          borderRadius: {
            xs: 2.5,
            sm: 3,
          },
          border: "1px solid #e8ebef",
          boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
          mb: {
            xs: 2,
            sm: 2.5,
          },
          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },

            "&:last-child": {
              pb: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: {
                xs: "flex-start",
                sm: "center",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: 1.8,
                sm: 2.5,
              },
            }}
          >
            <Box
              component="img"
              src={profile}
              alt="Mia Mary"
              sx={{
                width: {
                  xs: 68,
                  sm: 78,
                  md: 88,
                },
                height: {
                  xs: 68,
                  sm: 78,
                  md: 88,
                },
                borderRadius: {
                  xs: 2,
                  md: 2.5,
                },
                objectFit: "cover",
                border: "3px solid #f1f3f5",
                flexShrink: 0,
              }}
            />

            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#1f2937",
                    fontSize: {
                      xs: "1.05rem",
                      sm: "1.15rem",
                      md: "1.25rem",
                    },
                    lineHeight: 1.3,
                    wordBreak: "break-word",
                  }}
                >
                  {fullName}
                </Typography>

                <Chip
                  label="Active"
                  size="small"
                  sx={{
                    height: 25,
                    borderRadius: 2,
                    backgroundColor: "#eaf7ef",
                    color: "#238b4e",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                  }}
                />
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: "#6b7280",
                  mt: 0.5,
                  fontSize: {
                    xs: "0.78rem",
                    sm: "0.82rem",
                    md: "0.875rem",
                  },
                }}
              >
                Property Manager
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#9ca3af",
                  mt: 0.5,
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.8rem",
                    md: "0.875rem",
                  },
                }}
              >
                Employee ID: EMP-001
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: {
            xs: 2.5,
            sm: 3,
          },
          border: "1px solid #e8ebef",
          boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
          mb: {
            xs: 2,
            sm: 2.5,
          },
          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },

            "&:last-child": {
              pb: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            },
          }}
        >
          <Box
            sx={{
              mb: {
                xs: 2,
                md: 2.5,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#1f2937",
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
              }}
            >
              Personal Information
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#9ca3af",

                mt: 0.5,

                fontSize: {
                  xs: "0.75rem",
                  sm: "0.8rem",
                },
              }}
            >
              Your basic contact information
            </Typography>
          </Box>

          <Grid
            container
            spacing={{
              xs: 1.8,
              sm: 2,
              md: 2.5,
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Full Name"
                value={fullName}
                disabled={!isEditing}
                onChange={(event) => setFullName(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: !isEditing ? "#fafafa" : "#fff",
                  },

                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Box
                        sx={{
                          mr: 1,
                          display: "flex",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <BadgeOutlinedIcon fontSize="small" />
                      </Box>
                    ),
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Work Email"
                value="mia.mary@zestates.com"
                disabled
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                  },

                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Box
                        sx={{
                          mr: 1,
                          display: "flex",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <EmailOutlinedIcon fontSize="small" />
                      </Box>
                    ),
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Phone Number"
                value={phone}
                disabled={!isEditing}
                onChange={(event) => setPhone(event.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: !isEditing ? "#fafafa" : "#fff",
                  },

                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Box
                        sx={{
                          mr: 1,
                          display: "flex",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <PhoneOutlinedIcon fontSize="small" />
                      </Box>
                    ),
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Department"
                value="Property Management"
                disabled
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                  },
                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Box
                        sx={{
                          mr: 1,
                          display: "flex",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <BusinessOutlinedIcon fontSize="small" />
                      </Box>
                    ),
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: {
            xs: 2.5,
            sm: 3,
          },

          border: "1px solid #e8ebef",
          boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
          mb: {
            xs: 2,
            sm: 2.5,
          },
          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
            "&:last-child": {
              pb: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
            },
          }}
        >
          <Box
            sx={{
              mb: {
                xs: 2,
                md: 2.5,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#1f2937",
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
              }}
            >
              Employee Information
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#9ca3af",
                mt: 0.5,
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.8rem",
                },
              }}
            >
              Your company and role information
            </Typography>
          </Box>

          <Grid
            container
            spacing={{
              xs: 1.8,
              sm: 2,
              md: 2.5,
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Employee ID"
                value="EMP-001"
                disabled
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                  },

                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Job Title"
                value="Property Manager"
                disabled
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                  },

                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Box
                        sx={{
                          mr: 1,
                          display: "flex",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <WorkOutlineRoundedIcon fontSize="small" />
                      </Box>
                    ),
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Branch"
                value="Colombo"
                disabled
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                  },

                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Box
                        sx={{
                          mr: 1,
                          display: "flex",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <LocationOnOutlinedIcon fontSize="small" />
                      </Box>
                    ),
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Role"
                value="Property Manager"
                disabled
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                    backgroundColor: "#fafafa",
                  },

                  "& .MuiInputBase-input": {
                    fontSize: {
                      xs: "0.82rem",
                      sm: "0.875rem",
                    },
                  },
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <Box
                        sx={{
                          mr: 1,
                          display: "flex",
                          color: "#9ca3af",
                          flexShrink: 0,
                        }}
                      >
                        <ShieldOutlinedIcon fontSize="small" />
                      </Box>
                    ),
                  },
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
