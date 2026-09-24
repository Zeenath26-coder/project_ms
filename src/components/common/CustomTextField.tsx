import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

const CustomTextField = ({ sx, ...props }: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },

        "& .MuiFormLabel-asterisk": {
          color: "#e11d48",
        },

        ...sx,
      }}
    />
  );
};

export default CustomTextField;