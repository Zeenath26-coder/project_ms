import { ArrowBackRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import PropertyForm from "../../components/property/PropertyForm";

import { useProperties } from "../../context/PropertyContext";
import type { Property } from "../../types/property";

function CreateProperty() {
  const navigate = useNavigate();
  const { addProperty } = useProperties();
  const [image, setImage] = useState<string>("");

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<Property>({
    defaultValues: {
      name: "",
      id: "",
      type: "",
      description: "",
      status: "Available",
      address: "",
      city: "",
      postalCode: "",
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      monthlyRent: 0,
      securityDeposit: 0,
      image: [],
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setValue("image", [imageUrl]);
    clearErrors("image");
  };

  const onSubmit = (data: Property) => {
    if (!image) {
      setError("image", {
        type: "required",
        message: "Property image is required",
      });
      return;
    }
    const newProperty: Property = {
      ...data,
      image: [image],
    };

    addProperty(newProperty);
    navigate("/properties");
  };

  const handleCancel = () => {
    navigate("/properties");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        px: {
          xs: 0,
          sm: 1,
          md: 0,
        },
        pb: {
          xs: 3,
          sm: 4,
          md: 6,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          mb: {
            xs: 2,
            sm: 3,
          },
          minWidth: 0,
        }}
      >
        <IconButton
          type="button"
          onClick={handleCancel}
          sx={{
            width: {
              xs: 38,
              sm: 40,
            },
            height: {
              xs: 38,
              sm: 40,
            },
            mr: {
              xs: 1,
              sm: 1.5,
            },
            flexShrink: 0,
            border: "1px solid #E4E4E7",
            borderRadius: "10px",
            color: "#52525B",
            "&:hover": {
              backgroundColor: "#F4F4F5",
            },
          }}
        >
          <ArrowBackRounded fontSize="small" />
        </IconButton>

        <Box
          sx={{
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 19,
                sm: 22,
              },
              fontWeight: 600,
              color: "#18181B",
              lineHeight: 1.3,
            }}
          >
            Add Property
          </Typography>

          <Typography
            sx={{
              mt: 0.4,
              fontSize: {
                xs: 12,
                sm: 13,
              },
              color: "#71717A",
              lineHeight: 1.5,
            }}
          >
            Create a new property listing
          </Typography>
        </Box>
      </Box>

      <PropertyForm
        register={register}
        errors={errors}
        image={image}
        onImageUpload={handleImageUpload}
        onCancel={handleCancel}
        submitText="Save Property"
        isEdit={false}
      />
    </Box>
  );
}

export default CreateProperty;
