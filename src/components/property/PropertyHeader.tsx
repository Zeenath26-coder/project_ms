import { AddRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PropertyHeader() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 2,
        mt: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },
        mb: {
          xs: 3,
          sm: 4,
        },
      }}
    >
      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "20px",
              sm: "22px",
              md: "24px",
            },
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "#18181B",
            lineHeight: 1.2,
          }}
        >
          Properties
        </Typography>

        <Typography
          sx={{
            mt: 0.5,
            fontSize: {
              xs: "12px",
              sm: "13px",
              md: "14px",
            },
            color: "#71717A",
          }}
        >
          Manage and monitor your portfolio.
        </Typography>
      </Box>

      <Button
        startIcon={<AddRounded />}
        onClick={() => navigate("/properties/new")}
        sx={{
          flexShrink: 0,
          width: "fit-content",
          height: {
            xs: 34,
            sm: 36,
            md: 38,
          },
          px: {
            xs: 1.2,
            sm: 1.4,
            md: 1.7,
          },
          borderRadius: { xs: "8px", sm: "9px", md: "10px" },
          backgroundColor: "#81879156",
          color: "#34373C",
          fontWeight: 600,
          fontSize: {
            xs: "10px",
            sm: "11px",
            md: "13px",
          },
          textTransform: "none",
          whiteSpace: "nowrap",
          border: "1px solid rgba(255, 255, 255, 0.8)",

          transition: "all 0.2s ease",
          "& .MuiButton-startIcon": {
            marginRight: {
              xs: "3px",
              sm: "4px",
              md: "6px",
            },
          },

          "& .MuiSvgIcon-root": {
            fontSize: {
              xs: 16,
              sm: 17,
              md: 19,
            },
          },

          "&:hover": {
            backgroundColor: "#EEF0F3",
            color: "#22252A",
          },

          "&:active": {
            transform: "translateY(1px)",
          },
        }}
      >
        Add Property
      </Button>
    </Box>
  );
}

export default PropertyHeader;
