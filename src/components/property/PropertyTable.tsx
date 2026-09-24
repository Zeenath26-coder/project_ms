import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import type { Property } from "../../types/property";
import PropertyActions from "./ProperyActions";
import { StatusChip } from "../common/StatusChip";
import { useNavigate } from "react-router-dom";

interface PropertyTableProps {
  properties: Property[];
}

function PropertyTable({ properties }: PropertyTableProps) {
  const navigate = useNavigate();

  return (
    <>
      <TableContainer
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: "100%",
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  px: 1.5,
                  py: 1.2,
                  borderBottom: "1px solid #E4E4E7",
                  color: "#71717A",
                  fontSize: "11px",
                  fontWeight: 650,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  minWidth: 230,
                }}
              >
                Property
              </TableCell>

              <TableCell
                sx={{
                  py: 1.2,
                  borderBottom: "1px solid #E4E4E7",
                  color: "#71717A",
                  fontSize: "11px",
                  fontWeight: 650,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  minWidth: 140,
                }}
              >
                Details
              </TableCell>

              <TableCell
                sx={{
                  py: 1.2,
                  borderBottom: "1px solid #E4E4E7",
                  color: "#71717A",
                  fontSize: "11px",
                  fontWeight: 650,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  minWidth: 120,
                }}
              >
                Status
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  width: 50,
                  borderBottom: "1px solid #E4E4E7",
                }}
              />
            </TableRow>
          </TableHead>

          <TableBody>
            {properties.map((property) => (
              <TableRow
                key={property.id}
                hover
                onClick={() => navigate(`/properties/${property.id}`)}
                sx={{
                  cursor: "pointer",
                  "&:last-child td": {
                    borderBottom: 0,
                  },
                  "&:hover": {
                    bgcolor: "#FAFAFA",
                  },
                }}
              >
                <TableCell
                  sx={{
                    py: 1.8,
                    px: 1.5,
                    borderBottom: "1px solid #F0F0F1",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      minWidth: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={property.image?.[0]}
                      alt={property.name}
                      sx={{
                        width: 52,
                        height: 46,
                        flexShrink: 0,
                        objectFit: "cover",
                        borderRadius: "8px",
                        bgcolor: "#F4F4F5",
                        display: "block",
                      }}
                    />

                    <Box
                      sx={{
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "13px",
                          fontWeight: 650,
                          color: "#18181B",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {property.name}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.35,
                          fontSize: "12px",
                          color: "#A1A1AA",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {property.id} · {property.city}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    py: 1.8,
                    borderBottom: "1px solid #F0F0F1",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#52525B",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {property.type}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.35,
                      fontSize: "12px",
                      color: "#A1A1AA",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {property.monthlyRent}
                  </Typography>
                </TableCell>

                <TableCell
                  sx={{
                    py: 1.8,
                    borderBottom: "1px solid #F0F0F1",
                  }}
                >
                  <StatusChip status={property.status} />
                </TableCell>

                <TableCell
                  align="right"
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  sx={{
                    py: 1.8,
                    borderBottom: "1px solid #F0F0F1",
                  }}
                >
                  <PropertyActions propertyId={property.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: 42,
            px: 1.5,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FAFAFA",
            borderBottom: "1px solid #E4E4E7",
          }}
        >
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 650,
              color: "#71717A",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Properties
          </Typography>
        </Box>

        {properties.map((property) => (
          <Box
            key={property.id}
            onClick={() => navigate(`/properties/${property.id}`)}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              px: 1.5,
              py: 1.5,
              boxSizing: "border-box",
              borderBottom: "1px solid #F0F0F1",
              cursor: "pointer",
              "&:last-child": {
                borderBottom: 0,
              },
              "&:active": {
                backgroundColor: "#FAFAFA",
              },
            }}
          >
            <Box
              component="img"
              src={property.image?.[0]}
              alt={property.name}
              sx={{
                width: 62,
                height: 58,
                flexShrink: 0,
                objectFit: "cover",
                borderRadius: "8px",
                bgcolor: "#F4F4F5",
                display: "block",
              }}
            />

            <Box
              sx={{
                minWidth: 0,
                flex: 1,
                ml: 1.5,
                mr: 1.2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 650,
                  color: "#18181B",
                  lineHeight: 1.3,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {property.name}
              </Typography>

              <Typography
                sx={{
                  mt: 0.25,
                  fontSize: "11px",
                  color: "#A1A1AA",
                  lineHeight: 1.2,
                }}
              >
                {property.id}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.6,
                  mt: 0.7,
                  minWidth: 0,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#71717A",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {property.city}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#D4D4D8",
                  }}
                >
                  •
                </Typography>

                <Typography
                  sx={{
                    fontSize: "11px",
                    color: "#71717A",
                    whiteSpace: "nowrap",
                  }}
                >
                  {property.type}
                </Typography>
              </Box>

              <Typography
                sx={{
                  mt: 0.6,
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#27272A",
                  whiteSpace: "nowrap",
                }}
              >
                {property.monthlyRent}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-between",
                alignSelf: "stretch",
                flexShrink: 0,
                minWidth: 65,
              }}
            >
              <Box
                sx={{
                  transform: "scale(0.82)",
                  transformOrigin: "right top",
                }}
              >
                <StatusChip status={property.status} />
              </Box>

              <Box
                onClick={(event) => {
                  event.stopPropagation();
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mr: -0.5,
                }}
              >
                <PropertyActions propertyId={property.id} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default PropertyTable;
