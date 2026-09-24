import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface DeletePropertyDialogProps {
  open: boolean;
  propertyName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

function DeletePropertyDialog({
  open,
  propertyName,
  onClose,
  onConfirm,
}: DeletePropertyDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      sx={{
        "& .MuiDialog-container": {
          px: { xs: 1.5, sm: 2 },
        },

        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: 420,
          margin: 0,
          borderRadius: {
            xs: "12px",
            sm: "14px",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: {
            xs: 17,
            sm: 18,
          },
          fontWeight: 600,
          color: "#18181B",
          px: {
            xs: 2.5,
            sm: 3,
          },
          pt: {
            xs: 2.5,
            sm: 3,
          },
          pb: 1,
        }}
      >
        Delete property?
      </DialogTitle>

      <DialogContent
        sx={{
          px: {
            xs: 2.5,
            sm: 3,
          },
          pb: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 13.5,
              sm: 14,
            },
            color: "#71717A",
            lineHeight: 1.6,
          }}
        >
          Are you sure you want to delete <strong>{propertyName}</strong>? This
          action cannot be undone.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          px: {
            xs: 2.5,
            sm: 3,
          },
          pb: {
            xs: 2.5,
            sm: 3,
          },
          pt: 2,
          gap: 1,

          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },

          alignItems: "stretch",
        }}
      >
        <Button
          onClick={onClose}
          fullWidth
          sx={{
            height: {
              xs: 42,
              sm: 40,
            },
            px: 2,
            borderRadius: "9px",
            textTransform: "none",
            color: "#52525B",
            border: "1px solid #E4E4E7",
            fontSize: 14,

            "&:hover": {
              backgroundColor: "#F9FAFB",
            },
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={onConfirm}
          variant="contained"
          fullWidth
          sx={{
            height: {
              xs: 42,
              sm: 40,
            },
            px: 2.2,
            borderRadius: "9px",
            textTransform: "none",
            fontWeight: 500,
            fontSize: 14,
            color: "#991B1B",
            backgroundColor: "#FEE2E2",
            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#FECACA",
              boxShadow: "none",
            },
          }}
        >
          Delete Property
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeletePropertyDialog;
