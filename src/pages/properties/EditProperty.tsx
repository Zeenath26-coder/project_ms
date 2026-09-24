import { ArrowBackRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import PropertyForm from "../../components/property/PropertyForm";

import { useProperties } from "../../context/PropertyContext";
import type { Property } from "../../types/property";

function EditProperty() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from;
  const { id } = useParams();

  const { properties, updateProperty } = useProperties();

  const property = properties.find((item) => item.id === id);

  const [image, setImage] = useState<string>(property?.image?.[0] ?? "");

  const {
    register,
    handleSubmit,
    reset,
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

  useEffect(() => {
    if (!property) return;

    reset({
      name: property.name,
      id: property.id,
      type: property.type,
      description: property.description,
      status: property.status,
      address: property.address,
      city: property.city,
      postalCode: property.postalCode,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      monthlyRent: property.monthlyRent,
      securityDeposit: property.securityDeposit,
      image: property.image,
    });

    setImage(property.image?.[0] ?? "");
  }, [property, reset]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    setValue("image", [imageUrl]);
  };

  if (!property) {
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          px: {
            xs: 0,
            sm: 1,
            md: 0,
          },
          py: {
            xs: 2,
            sm: 4,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: 19,
              sm: 22,
            },
            fontWeight: 600,
            mb: 1,
            color: "#18181B",
          }}
        >
          Property Not Found
        </Typography>

        <Typography
          sx={{
            color: "#71717A",
            fontSize: {
              xs: 13,
              sm: 14,
            },
            lineHeight: 1.6,
            mb: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          The property you are trying to edit does not exist.
        </Typography>

        <Box>
          <button
            type="button"
            onClick={() => navigate("/properties")}
            style={{
              minHeight: "42px",
              padding: "0 16px",
              borderRadius: "9px",
              border: "1px solid #E4E4E7",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            Back to Properties
          </button>
        </Box>
      </Box>
    );
  }

  const onSubmit = (data: Property) => {
    const updatedProperty: Property = {
      ...data,
      id: property.id,
      image: data.image?.length > 0 ? data.image : property.image,
    };

    updateProperty(updatedProperty);
    if (from === "dashboard") {
      navigate("/dashboard");
    } else {
      navigate(`/properties/${property.id}`);
    }
  };

  const handleCancel = () => {
    if (from === "dashboard") {
      navigate("/dashboard");
    } else {
      navigate(`/properties/${property.id}`);
    }
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
            Edit Property
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
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: {
                xs: "normal",
                sm: "nowrap",
              },
            }}
          >
            Update the details of {property.name}
          </Typography>
        </Box>
      </Box>

      <PropertyForm
        register={register}
        errors={errors}
        image={image}
        onImageUpload={handleImageUpload}
        onCancel={handleCancel}
        submitText="Save Changes"
        isEdit={true}
      />
    </Box>
  );
}

export default EditProperty;
