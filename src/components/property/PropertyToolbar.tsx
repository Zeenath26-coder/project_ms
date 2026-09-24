import { SearchRounded, CloseRounded } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

interface PropertyToolbarProps {
  searchValue: string;
  statusValue: string;
  onSearch: (value: string) => void;
  onStatusChange: (value: string) => void;
  onReset: () => void;
}
function PropertytToolBar({
  searchValue,
  statusValue,
  onSearch,
  onStatusChange,
  onReset,
}: PropertyToolbarProps) {
  const hasFilters = statusValue !== "all";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 2,
      }}
    >
      <OutlinedInput
        size="small"
        value={searchValue}
        placeholder="Search by property name or ID..."
        onChange={(e) => onSearch(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchRounded
              sx={{
                fontSize: 18,
                color: "#A1A1AA",
              }}
            ></SearchRounded>
          </InputAdornment>
        }
        endAdornment={
          searchValue && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => onSearch("")}
                aria-label="Clear search"
                sx={{
                  width: 26,
                  height: 26,
                  p: 0.4,
                  color: "#A1A1AA",
                  "&:hover": {
                    color: "#27272A",
                    backgroundColor: "#F4F4F5",
                  },
                }}
              >
                <CloseRounded sx={{ fontSize: 17 }} />
              </IconButton>
            </InputAdornment>
          )
        }
        sx={{
          width: 280,
          height: 38,
          bgcolor: "#fff",
          borderRadius: "8px",
          "& fieldset": {
            border: "1px solid #E4E4E7",
          },
          "&:hover fieldset": {
            borderColor: "#D4D4D8",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#A1A1AA",
            borderWidth: "1px",
          },
          "& input": {
            fontSize: "13px",
          },
        }}
      />
      <Select
        size="small"
        value={statusValue}
        onChange={(e) => onStatusChange(e.target.value)}
        displayEmpty
        sx={{
          height: 38,
          minWidth: 150,
          borderRadius: "8px",
          fontSize: "13px",
          bgcolor: "#fff",

          "& .MuiSelect-select": {
            py: 1,
            px: 1.5,
          },

          "& fieldset": {
            borderColor: "#E4E4E7",
          },
          "&:hover fieldset": {
            borderColor: "#D4D4D8",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#D4D4D8",
            borderWidth: "1px",
          },

          "& .MuiSelect-icon": {
            color: "#71717A",
          },
        }}
        MenuProps={{
          sx: {
            "& .MuiPaper-root": {
              mt: 1,
              borderRadius: "12px",
              border: "1px solid #E8E8E8",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.10)",
              overflow: "hidden",
              minWidth: 180,

              "& .MuiMenuItem-root": {
                minHeight: 42,
                px: 1.5,
                fontSize: "13px",
                color: "#27272A",
                borderRadius: "7px",
                mx: 0.6,
                my: 0.3,

                "&:hover": {
                  backgroundColor: "#F7F7F6",
                },

                "&.Mui-selected": {
                  backgroundColor: "#F1F1EF",
                  fontWeight: 600,

                  "&:hover": {
                    backgroundColor: "#F1F1EF",
                  },
                },
              },
            },
          },
        }}
      >
        <MenuItem value="all">All properties</MenuItem>
        <MenuItem value="available">Available</MenuItem>
        <MenuItem value="occupied">Occupied</MenuItem>
        <MenuItem value="maintenance">Maintenance</MenuItem>
        <MenuItem value="rented">Rented</MenuItem>
      </Select>

      {hasFilters && (
        <Box
          component="button"
          onClick={onReset}
          sx={{
            border: "none",
            background: "transparent",
            color: "#71717A",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
            px: 1,
            height: 38,

            "&:hover": {
              color: "#18181B",
            },
          }}
        >
          Reset
        </Box>
      )}
    </Box>
  );
}

export default PropertytToolBar;
