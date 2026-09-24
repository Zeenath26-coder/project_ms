import {
  ArrowBackRounded,
  DeleteOutlineRounded,
  EditOutlined,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { useProperties } from "../../context/PropertyContext";
import { StatusChip } from "../../components/common/StatusChip";

function PropertyDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from;

  const handleBack = () => {
    if (from === "dashboard") {
      navigate("/dashboard");
    } else {
      navigate("/properties");
    }
  };
  const { id } = useParams();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const { properties, deleteProperty } = useProperties();

  const property = properties.find((item) => item.id === id);

  if (!property) {
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          py: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          px: {
            xs: 1,
            sm: 2,
            md: 0,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 20,
              sm: 22,
            },
            fontWeight: 600,
            mb: 1,
          }}
        >
          Property Not Found
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: 13,
              sm: 14,
            },
            color: "#71717A",
            mb: 3,
          }}
        >
          The property you are looking for does not exist.
        </Typography>

        <Button
          variant="outlined"
          onClick={() => navigate("/properties")}
          sx={{
            textTransform: "none",
            borderRadius: "9px",
          }}
        >
          Back to Properties
        </Button>
      </Box>
    );
  }

  const handleDelete = () => {
    deleteProperty(property.id);
    navigate("/properties");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        pb: {
          xs: 3,
          sm: 4,
          md: 6,
        },
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          justifyContent: "space-between",
          gap: 2,
          mb: {
            xs: 2,
            sm: 3,
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 1,
              sm: 1.5,
            },
            minWidth: 0,
            width: {
              xs: "100%",
              sm: "auto",
            },
          }}
        >
          <IconButton
            onClick={handleBack}
            sx={{
              flexShrink: 0,
              width: {
                xs: 38,
                sm: 40,
              },
              height: {
                xs: 38,
                sm: 40,
              },
              border: "1px solid #E4E4E7",
              borderRadius: "10px",
            }}
          >
            <ArrowBackRounded fontSize="small" />
          </IconButton>

          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  sm: 20,
                  md: 22,
                },
                fontWeight: 600,
                color: "#18181B",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: {
                  xs: "normal",
                  sm: "nowrap",
                },
              }}
            >
              {property.name}
            </Typography>

            <Typography
              sx={{
                mt: 0.4,
                fontSize: {
                  xs: 12,
                  sm: 13,
                },
                color: "#71717A",
              }}
            >
              Property ID: {property.id}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            alignSelf: {
              xs: "flex-start",
              sm: "center",
            },
          }}
        >
          <StatusChip status={property.status} />
        </Box>
      </Box>

      <Paper
        elevation={0}
        sx={{
          mb: {
            xs: 1.5,
            sm: 2,
          },
          border: "1px solid #E4E4E7",
          borderRadius: {
            xs: "12px",
            sm: "14px",
          },
          overflow: "hidden",
        }}
      >
        {property.image.length > 0 ? (
          <Box
            component="img"
            src={property.image[0]}
            alt={property.name}
            sx={{
              width: "100%",
              height: {
                xs: 220,
                sm: 300,
                md: 400,
              },
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Box
            sx={{
              height: {
                xs: 220,
                sm: 300,
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F4F4F5",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: 13,
                  sm: 14,
                },
                color: "#71717A",
              }}
            >
              No image available
            </Typography>
          </Box>
        )}
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          mb: 2,
          border: "1px solid #E4E4E7",
          borderRadius: {
            xs: "12px",
            sm: "14px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 15,
              sm: 16,
            },
            fontWeight: 600,
            mb: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          Basic Information
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Property Name
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
                fontWeight: 500,
                overflowWrap: "anywhere",
              }}
            >
              {property.name}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Property Type
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
                fontWeight: 500,
                overflowWrap: "anywhere",
              }}
            >
              {property.type}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Description
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: {
                  xs: 13,
                  sm: 14,
                },
                lineHeight: 1.7,
                color: "#3F3F46",
                overflowWrap: "anywhere",
              }}
            >
              {property.description}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          mb: 2,
          border: "1px solid #E4E4E7",
          borderRadius: {
            xs: "12px",
            sm: "14px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 15,
              sm: 16,
            },
            fontWeight: 600,
            mb: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          Location
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid size={{ xs: 12 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Address
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
                overflowWrap: "anywhere",
              }}
            >
              {property.address}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              City
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
              }}
            >
              {property.city}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Postal Code
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 14,
              }}
            >
              {property.postalCode}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          mb: 2,
          border: "1px solid #E4E4E7",
          borderRadius: {
            xs: "12px",
            sm: "14px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 15,
              sm: 16,
            },
            fontWeight: 600,
            mb: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          Property Details
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Bedrooms
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {property.bedrooms}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Bathrooms
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {property.bathrooms}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Area
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {property.area.toLocaleString()} sq ft
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },
          mb: {
            xs: 2,
            sm: 3,
          },
          border: "1px solid #E4E4E7",
          borderRadius: {
            xs: "12px",
            sm: "14px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 15,
              sm: 16,
            },
            fontWeight: 600,
            mb: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          Pricing
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Monthly Rent
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: {
                  xs: 20,
                  sm: 22,
                },
                fontWeight: 600,
                color: "#18181B",
              }}
            >
              ${property.monthlyRent.toLocaleString()}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography
              sx={{
                fontSize: 12,
                color: "#71717A",
              }}
            >
              Security Deposit
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: {
                  xs: 20,
                  sm: 22,
                },
                fontWeight: 600,
                color: "#18181B",
              }}
            >
              ${property.securityDeposit.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "stretch",
            sm: "flex-end",
          },
          alignItems: "center",
          gap: 1,
          mt: 1,
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
        }}
      >
        <Button
          variant="outlined"
          startIcon={<EditOutlined sx={{ fontSize: 18 }} />}
          onClick={() =>
            navigate(`/properties/${property.id}/edit`, {
              state: { from },
            })
          }
          sx={{
            width: {
              xs: "100%",
              sm: "auto",
            },
            height: 40,
            px: 2.2,
            textTransform: "none",
            borderRadius: "9px",
            fontSize: 13.5,
            fontWeight: 500,
            color: "#18181B",
            backgroundColor: "#F4F4F5",
            border: "1px solid #E4E4E7",
            boxShadow: "none",

            "&:hover": {
              borderColor: "#D4D4D8",
              backgroundColor: "#E4E4E7",
              boxShadow: "none",
            },
          }}
        >
          Edit Property
        </Button>

        <Button
          variant="text"
          startIcon={<DeleteOutlineRounded sx={{ fontSize: 18 }} />}
          onClick={() => setDeleteDialogOpen(true)}
          sx={{
            width: {
              xs: "100%",
              sm: "auto",
            },
            height: 40,
            px: 1.8,
            textTransform: "none",
            borderRadius: "9px",
            fontSize: 13.5,
            fontWeight: 500,
            color: "#DC2626",

            "&:hover": {
              backgroundColor: "#FEF2F2",
              color: "#B91C1C",
            },
          }}
        >
          Delete
        </Button>
      </Box>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: {
              xs: "12px",
              sm: "14px",
            },
            width: "100%",
            maxWidth: 420,
            mx: {
              xs: 2,
              sm: "auto",
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: {
              xs: 17,
              sm: 18,
            },
            fontWeight: 600,
            color: "#18181B",
            pb: 1,
          }}
        >
          Delete property?
        </DialogTitle>

        <DialogContent>
          <Typography
            sx={{
              fontSize: {
                xs: 13,
                sm: 14,
              },
              color: "#71717A",
              lineHeight: 1.6,
            }}
          >
            Are you sure you want to delete <strong>{property.name}</strong>?
            This action cannot be undone.
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            px: {
              xs: 2,
              sm: 3,
            },
            pb: {
              xs: 2,
              sm: 3,
            },
            gap: 1,
            flexDirection: {
              xs: "column-reverse",
              sm: "row",
            },
            alignItems: "stretch",
          }}
        >
          <Button
            onClick={() => setDeleteDialogOpen(false)}
            sx={{
              width: {
                xs: "100%",
                sm: "auto",
              },
              height: 40,
              px: 2,
              textTransform: "none",
              color: "#52525B",
              border: "1px solid #E4E4E7",
              borderRadius: "9px",

              "&:hover": {
                backgroundColor: "#F9FAFB",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleDelete}
            variant="contained"
            sx={{
              width: {
                xs: "100%",
                sm: "auto",
              },
              height: 40,
              px: 2,
              textTransform: "none",
              fontSize: 13.5,
              fontWeight: 500,
              color: "#991b1b",
              backgroundColor: "#FEE2E2",
              borderRadius: "9px",
              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#FECACA",
                boxShadow: "none",
              },
            }}
          >
            Delete Property
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PropertyDetails;
