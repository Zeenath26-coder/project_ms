import { Chip } from "@mui/material";
import { FiberManualRecordRounded } from "@mui/icons-material";

export type Status = "Available" | "Occupied" | "Rented" | "Maintenance";

interface StatusChipProps {
  status: Status;
}

export function StatusChip({ status }: StatusChipProps) {
  const styles = {
    Available: {
      bgcolor: "#ECFDF3",
      color: "#027A48",
      border: "#D1FADF",
      dotColor: "#12B76A",
    },

    Occupied: {
      bgcolor: "#EFF6FF",
      color: "#175CD3",
      border: "#D1E9FF",
      dotColor: "#2E90FA",
    },

    Rented: {
      bgcolor: "#F5F3FF",
      color: "#6D28D9",
      border: "#DDD6FE",
      dotColor: "#8B5CF6",
    },

    Maintenance: {
      bgcolor: "#FFF7ED",
      color: "#C2410C",
      border: "#FED7AA",
      dotColor: "#F97316",
    },
  };

  const style = styles[status];

  return (
    <Chip
      icon={
        <FiberManualRecordRounded
          sx={{
            fontSize: {
              xs: "7px !important",
              sm: "8px !important",
              md: "9px !important",
            },
            color: `${style.dotColor} !important`,
          }}
        />
      }
      label={status}
      size="small"
      sx={{
        height: {
          xs: 25,
          sm: 28,
          md: 30,
        },
        borderRadius: "999px",
        bgcolor: style.bgcolor,
        color: style.color,
        border: `1px solid ${style.border}`,
        fontWeight: 600,
        fontSize: {
          xs: "10px",
          sm: "11px",
          md: "12px",
        },
        whiteSpace: "nowrap",
        "& .MuiChip-icon": {
          marginLeft: {
            xs: "6px",
            sm: "7px",
            md: "8px",
          },
          marginRight: "-2px",
        },

        "& .MuiChip-label": {
          px: {
            xs: 0.7,
            sm: 0.9,
            md: 1,
          },
        },
      }}
    />
  );
}
