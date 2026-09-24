import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
  },
];

const SimpleBarChart = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
        minHeight: {
          xs: 320,
          sm: 340,
          md: 350,
        },
        backgroundColor: "#ffffff",
        border: "1px solid #e8e8e8",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(50, 70, 90, 0.08)",
        p: {
          xs: 1.5,
          sm: 2,
          md: 2.5,
        },
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: {
            xs: 1.5,
            sm: 2,
          },
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 13,
              sm: 14,
              md: 15,
            },
            fontWeight: 600,
            color: "#222",
            whiteSpace: "nowrap",
          }}
        >
          Property Performance
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: 10,
              sm: 11,
              md: 12,
            },
            fontWeight: 500,
            color: "#4B5563",
            backgroundColor: "#F8F9FB",
            border: "1px solid #E5E7EB",
            px: {
              xs: 0.8,
              sm: 1,
            },
            py: {
              xs: 0.5,
              sm: 0.75,
            },

            borderRadius: "8px",
            whiteSpace: "nowrap",
          }}
        >
          This Year
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: 230,
            sm: 250,
            md: 270,
          },
          minWidth: 0,
        }}
      >
        <BarChart
          style={{
            width: "100%",
            height: "270px",
          }}
          responsive
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#eeeeee"
          />
          <XAxis
            dataKey="name"
            tick={{
              fontSize: 11,
              fill: "#888",
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            width="auto"
            tick={{
              fontSize: 11,
              fill: "#888",
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
              fontSize: "12px",
            }}
          />

          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{
              fontSize: "12px",
              color: "#6B7280",
              paddingTop: "8px",
            }}
          />

          <Bar
            dataKey="pv"
            name="Occupied"
            fill="#243F88"
            barSize={12}
            radius={[5, 5, 0, 0]}
          />

          <Bar
            dataKey="uv"
            name="Available"
            fill="#9B83F6"
            barSize={12}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </Box>
    </Box>
  );
};

export default SimpleBarChart;
