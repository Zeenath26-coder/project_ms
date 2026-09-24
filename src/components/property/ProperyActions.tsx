import {
  DeleteOutlineRounded,
  EditOutlined,
  MoreVertRounded,
  VisibilityOutlined,
} from "@mui/icons-material";

import { IconButton, Menu, MenuItem, Typography } from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../../context/PropertyContext";
import DeletePropertyDialog from "./DeletePropertyDialog";

interface PropertyActionsProps {
  propertyId: string;
}

function PropertyActions({ propertyId }: PropertyActionsProps) {
  const navigate = useNavigate();
  const { deleteProperty } = useProperties();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleView = () => {
    handleMenuClose();
    navigate(`/properties/${propertyId}`);
  };

  const handleEdit = () => {
    handleMenuClose();
    navigate(`/properties/${propertyId}/edit`);
  };

  const handleDeleteClick = () => {
    handleMenuClose();
    setDeleteDialogOpen(true);
  };

  const handleDelete = () => {
    deleteProperty(propertyId);
    setDeleteDialogOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleMenuOpen}
        size="small"
        sx={{
          width: { xs: 36, sm: 34 },
          height: { xs: 36, sm: 34 },
          borderRadius: "8px",
          color: "#71717A",
          flexShrink: 0,

          "&:hover": {
            backgroundColor: "#F4F4F5",
            color: "#18181B",
          },
          "&:active": {
            backgroundColor: "#E4E4E7",
          },
        }}
      >
        <MoreVertRounded fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        onClick={(event) => {
          event.stopPropagation();
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              mt: 1.5,
              borderRadius: "10px",
              minWidth: { xs: 190, sm: 180 },
              maxWidth: "calc(100vw - 24px)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.09)",
              border: "1px solid #eeeeee",
              p: 0.5,
            },
          },
        }}
      >
        <MenuItem
          onClick={handleView}
          sx={{
            minHeight: { xs: 46, sm: 42 },
            borderRadius: "8px",
            gap: 1.2,
            fontSize: { xs: 14, sm: 14 },
            px: 1.5,

            "&:hover": {
              backgroundColor: "#F4F4F5",
            },
          }}
        >
          <VisibilityOutlined
            sx={{
              fontSize: 19,
              color: "#52525B",
              flexShrink: 0,
            }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: "inherit",
              color: "#27272A",
              whiteSpace: "nowrap",
            }}
          >
            View property
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={handleEdit}
          sx={{
            minHeight: { xs: 46, sm: 42 },
            borderRadius: "8px",
            gap: 1.2,
            fontSize: { xs: 14, sm: 14 },

            "&:hover": {
              backgroundColor: "#F4F4F5",
            },
          }}
        >
          <EditOutlined
            sx={{
              fontSize: 19,
              color: "#52525B",
              flexShrink: 0,
            }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: "inherit",
              color: "#27272A",
              whiteSpace: "nowrap",
            }}
          >
            Edit property
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={handleDeleteClick}
          sx={{
            minHeight: { xs: 46, sm: 42 },
            borderRadius: "8px",
            gap: 1.2,

            fontSize: { xs: 14, sm: 14 },
            px: 1.5,
            color: "#DC2626",

            "&:hover": {
              backgroundColor: "#FEF2F2",
            },
          }}
        >
          <DeleteOutlineRounded
            sx={{
              fontSize: 19,
              color: "#DC2626",
              flexShrink: 0,
            }}
          />
          <Typography
            component="span"
            sx={{
              fontSize: "inherit",
              color: "#DC2626",
              whiteSpace: "nowrap",
            }}
          >
            Delete property
          </Typography>
        </MenuItem>
      </Menu>
      <DeletePropertyDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

export default PropertyActions;
