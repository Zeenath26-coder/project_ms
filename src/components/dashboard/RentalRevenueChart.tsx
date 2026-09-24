import { Box, Typography } from "@mui/material";

import {
  LineChart,
  Line,
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

export default function Example() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 350,
        backgroundColor: "#ffffff",
        border: "1px solid #E7E7E7",
        borderRadius: "14px",
        boxShadow: "0 4px 18px rgba(50, 70, 90, 0.06)",
        p: 2.5,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 650,
              color: "#1F2937",
              letterSpacing: "-0.25px",
              lineHeight: 1.3,
            }}
          >
            Rental Revenue
          </Typography>

          <Typography
            sx={{
              mt: 0.4,
              fontSize: "11.5px",
              color: "#9CA3AF",
              fontWeight: 400,
            }}
          >
            Revenue performance over time
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 0.4,
            fontSize: "12px",
            fontWeight: 500,
            color: "#4B5563",
            backgroundColor: "#F8F9FB",
            border: "1px solid #E5E7EB",
            padding: "6px 10px",
            borderRadius: "8px",
          }}
        >
          This Year
        </Typography>
      </Box>

      <LineChart
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
          stroke="#E5E5E5"
        />

        <XAxis
          dataKey="name"
          stroke="#A3A3A3"
          tick={{
            fontSize: 11,
            fill: "#737373",
          }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          width="auto"
          stroke="#A3A3A3"
          tick={{
            fontSize: 11,
            fill: "#737373",
          }}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
          }}
        />

        <Legend
          iconType="circle"
          iconSize={7}
          wrapperStyle={{
            fontSize: "11px",
            color: "#6B7280",
            paddingTop: "8px",
          }}
        />

        <Line
          type="monotone"
          dataKey="pv"
          name="Rental Revenue"
          stroke="#3155A6"
          strokeWidth={2.5}
          dot={{
            fill: "#3155A6",
            r: 3,
          }}
          activeDot={{
            r: 5,
          }}
        />

        <Line
          type="monotone"
          dataKey="uv"
          name="Expected Revenue"
          stroke="#C5D0E0"
          strokeWidth={2}
          dot={{
            fill: "#C5D0E0",
            r: 3,
          }}
          activeDot={{
            r: 5,
          }}
        />
      </LineChart>
    </Box>
  );
}
