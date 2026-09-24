import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

import "./login-form.css";
import { loginSchema } from "../../validations/authValidation";
import type { LoginFormData } from "../../types/auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "rgba(255,255,255,0.72)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",

      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      },

      "&.Mui-focused": {
        backgroundColor: "#ffffff",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#e1e3e6",
      },

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#c9cbd0",
      },

      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#222",
        borderWidth: "1px",
      },
    },

    "& .MuiOutlinedInput-input::placeholder": {
      fontSize: "13px",
      color: "#999",
      opacity: 1,
    },

    "& .MuiInputLabel-root": {
      fontSize: "13px",
      color: "#666",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#222",
    },
    "& .MuiFormLabel-asterisk": {
      color: "#e11d48",
    },

    "& .MuiFormHelperText-root": {
      marginLeft: "2px",
      marginTop: "6px",
      fontSize: "10px",
    },

    "& .MuiFormHelperText-root.Mui-error": {
      color: "#c62828",
    },
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-group">
        <TextField
          id="email"
          label="Email"
          required
          fullWidth
          type="email"
          placeholder="thunder.Z@zestate.com"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          size="small"
          sx={textFieldSx}
        />
      </div>

      <div className="form-group">
        <TextField
          id="password"
          label="Password"
          required
          fullWidth
          type={showPassword ? "text" : "password"}
          placeholder="••••••••••••"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          size="small"
          sx={textFieldSx}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    sx={{
                      color: "#8A8D91",
                      padding: "4px",
                      "& svg": {
                        fontSize: 17,
                        strokeWidth: 1.5,
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#222222",
                      },
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOffOutlined />
                    ) : (
                      <VisibilityOutlined />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>

      <div className="form-options">
        <label className="remember">
          <input type="checkbox" {...register("remember")}></input>
          <span>Keep me signed in</span>
        </label>
        <button
          type="button"
          className="forgot-password"
          onClick={() => {
            console.log("Forgot password");
          }}
        >
          Forgot password?
        </button>
      </div>

      <button type="submit" className="sign-in-button" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
      <div className="access-message">
        <span>Need access?</span>
        <button
          type="button"
          className="contact-admin"
          onClick={() => console.log("Contact administrator")}
        >
          Contact your administrator
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
