import { Box, Typography } from "@mui/material";

interface StatCardProps {
  label: string;
  value: number;
  description: string;
}

export function StatCard({ label, value, description }: StatCardProps) {
  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #E8E8E8",
        borderRadius: "18px",
        bgcolor: "#FFFFFF",
        boxShadow: "0 4px 15px rgba(50, 70, 90, 0.08)",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      <Typography
        variant="h4"
        sx={{ mt: 1, fontWeight: 750, letterSpacing: "-1px" }}
      >
        {value}
      </Typography>

      <Typography variant="caption" sx={{ color: "#999999" }}>
        {description}
      </Typography>
    </Box>
  );
}
