import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

import { useProperties } from "../../context/PropertyContext";

import PropertyHeader from "../../components/property/PropertyHeader";
import PropertyToolbar from "../../components/property/PropertyToolbar";
import PropertyTable from "../../components/property/PropertyTable";

function Properties() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const { properties } = useProperties();
  const handleReset = () => {
    setSearch("");
    setStatus("all");
  };
  const filteredProperties = properties.filter((property) => {
    const query = search.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      property.name.toLowerCase().includes(query) ||
      property.id.toLowerCase().includes(query);
    const matchesStatus =
      status === "all" || property.status.toLowerCase() === status;
    return matchesSearch && matchesStatus;
  });

  const hasSearch = search.trim() !== "";
  const hasStatusFilter = status !== "all";
  const hasProperties = properties.length > 0;

  const getEmptyStateTitle = () => {
    if (!hasProperties) {
      return "No properties yet;";
    }
    if (hasSearch && hasStatusFilter) {
      return "No matching properties";
    }
    if (hasSearch) {
      return "No properties found";
    }
    return "No properties found";
  };

  const getEmptyStateMessage = () => {
    if (!hasProperties) {
      return "There are currently no properties available.";
    }
    if (hasSearch && hasStatusFilter) {
      return "No properties match your search and selected status.";
    }
    if (hasSearch) {
      return `No properties match your search for "${search}".`;
    }
    return "No properties are available to display.";
  };

  const showClearButton = hasSearch || hasStatusFilter;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1440,
        mx: "auto",
      }}
    >
      <PropertyHeader />

      <PropertyToolbar
        searchValue={search}
        statusValue={status}
        onSearch={setSearch}
        onStatusChange={setStatus}
        onReset={handleReset}
      />
      {filteredProperties.length === 0 ? (
        <Box
          sx={{
            minHeight: 320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 600,
              color: "#27272A",
            }}
          >
            {getEmptyStateTitle()}
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              fontSize: 13,
              color: "#71717A",
              maxWidth: 380,
            }}
          >
            {getEmptyStateMessage()}
          </Typography>

          {showClearButton && (
            <Button
              onClick={handleReset}
              variant="outlined"
              size="small"
              sx={{
                mt: 2,
                px: 2,
                borderRadius: "8px",
                textTransform: "none",
                fontSize: 13,
                fontWeight: 500,
                color: "#27272A",
                borderColor: "#E4E4E7",

                "&:hover": {
                  borderColor: "#A1A1AA",
                  backgroundColor: "#FAFAFA",
                },
              }}
            >
              Clear filters
            </Button>
          )}
        </Box>
      ) : (
        <PropertyTable properties={filteredProperties} />
      )}
    </Box>
  );
}

export default Properties;
