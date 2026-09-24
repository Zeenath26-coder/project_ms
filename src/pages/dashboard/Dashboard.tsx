import { Box, Grid, Typography } from "@mui/material";
import { StatCard } from "../../components/dashboard/StatCard";
import { RecentProperties } from "../../components/dashboard/RecentProperties";
import SimpleBarChart from "../../components/dashboard/PropertyPerfomanceChart";
import Example from "../../components/dashboard/RentalRevenueChart";
function Dashboard() {
  return (
    <Box sx={{ mb: 4, width: "100%" }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: "#1F2937",
            letterSpacing: "-0.3px",
          }}
        >
          Good Morning, Mia.
        </Typography>

        <Typography
          sx={{ mt: 0.5, color: "#6B7280", fontSize: "13px", fontWeight: 400 }}
        >
          Here is an overview of your property portfolio.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            label="Total Properties"
            value={124}
            description="Across all locations"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard label="Available" value={42} description="Ready to rent" />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            label="Occupied"
            value={68}
            description="Currently rented"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            label="Maintenance"
            value={14}
            description="Needs attention"
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ height: "100%", minHeight: 350 }}>
            <Example />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Box sx={{ height: "100%", minHeight: 350 }}>
            <SimpleBarChart />
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={{ minHeight: 350 }}>
            <RecentProperties />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
