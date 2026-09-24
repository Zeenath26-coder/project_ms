import { CloudUploadOutlined } from "@mui/icons-material";
import { Box, Button, Grid, MenuItem, Paper, Typography } from "@mui/material";

import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { Property } from "../../types/property";
import CustomTextField from "../../components/common/CustomTextField";

import {
  nameValidation,
  propertyIdValidation,
  postalCodeValidation,
  propertyTypeValidation,
  descriptionValidation,
  bedroomsValidation,
  bathroomsValidation,
  areaValidation,
  monthlyRentValidation,
  securityDepositValidation,
  addressValidation,
  cityValidation,
} from "../../validations/propertyValidation";

const paperSx = {
  p: {
    xs: 2,
    sm: 2.5,
    md: 3,
  },
  mb: {
    xs: 1.5,
    sm: 2,
  },
  border: "1px solid #E4E4E7",
  borderRadius: {
    xs: "12px",
    sm: "14px",
  },
};

const sectionTitleSx = {
  fontSize: {
    xs: 15,
    sm: 16,
  },
  fontWeight: 600,
  color: "#18181B",
};

const sectionSubtitleSx = {
  mt: 0.5,
  mb: {
    xs: 2,
    sm: 3,
  },
  fontSize: {
    xs: 12,
    sm: 12.5,
  },
  color: "#71717A",
};

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function Section({ title, subtitle, children }: SectionProps) {
  return (
    <Paper elevation={0} sx={paperSx}>
      <Typography sx={sectionTitleSx}>{title}</Typography>
      <Typography sx={sectionSubtitleSx}>{subtitle}</Typography>
      {children}
    </Paper>
  );
}
interface PropertyFormProps {
  register: UseFormRegister<Property>;
  errors: FieldErrors<Property>;
  image: string;
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  submitText: string;
  isEdit?: boolean;
}

function PropertyForm({
  register,
  errors,
  image,
  onImageUpload,
  onCancel,
  submitText,
  isEdit = false,
}: PropertyFormProps) {
  return (
    <>
      <Section
        title="Basic Information"
        subtitle={
          isEdit
            ? "Update the basic details of your property."
            : "Add the basic details of your property."
        }
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <CustomTextField
              label="Property Name"
              required
              placeholder="e.g. Ocean View Apartment"
              {...register("name", nameValidation)}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              label="Property ID"
              required
              placeholder="PROP-001"
              {...register("id", propertyIdValidation)}
              error={!!errors.id}
              helperText={errors.id?.message}
              disabled={isEdit}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              label="Property Type"
              placeholder="Apartment"
              required
              {...register("type", propertyTypeValidation)}
              error={!!errors.type}
              helperText={errors.type?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              select
              label="Status"
              defaultValue="Available"
              {...register("status")}
              error={!!errors.status}
              helperText={errors.status?.message}
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Occupied">Occupied</MenuItem>
              <MenuItem value="Maintenance">Maintenance</MenuItem>
              <MenuItem value="Rented">Rented</MenuItem>
            </CustomTextField>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <CustomTextField
              multiline
              minRows={4}
              label="Description"
              placeholder="Describe the property..."
              {...register("description", descriptionValidation)}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </Grid>
        </Grid>
      </Section>

      <Section title="Location" subtitle="Where is this property located?">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <CustomTextField
              label="Address"
              required
              placeholder="123 Marine Drive"
              {...register("address", addressValidation)}
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              label="City"
              placeholder="Colombo"
              required
              {...register("city", cityValidation)}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              label="Postal Code"
              placeholder="00300"
              required
              {...register("postalCode", postalCodeValidation)}
              error={!!errors.postalCode}
              helperText={errors.postalCode?.message}
            />
          </Grid>
        </Grid>
      </Section>

      <Section
        title=" Property Details"
        subtitle="
          Add size and room information."
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              type="number"
              label="Bedrooms"
              {...register("bedrooms", bedroomsValidation)}
              error={!!errors.bedrooms}
              helperText={errors.bedrooms?.message}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              type="number"
              label="Bathrooms"
              {...register("bathrooms", bathroomsValidation)}
              error={!!errors.bathrooms}
              helperText={errors.bathrooms?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <CustomTextField
              label="Area"
              required
              placeholder="1,850 sq ft"
              {...register("area", areaValidation)}
              error={!!errors.area}
              helperText={errors.area?.message}
            />
          </Grid>
        </Grid>
      </Section>

      <Section
        title="Pricing"
        subtitle="Set the property's rental and deposit amounts."
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              type="number"
              label="Monthly Rent"
              required
              placeholder="2500"
              {...register("monthlyRent", monthlyRentValidation)}
              error={!!errors.monthlyRent}
              helperText={errors.monthlyRent?.message}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTextField
              type="number"
              label="Security Deposit"
              required
              placeholder="5000"
              {...register("securityDeposit", {
                ...securityDepositValidation,
                valueAsNumber: true,
              })}
              error={!!errors.securityDeposit}
              helperText={errors.securityDeposit?.message}
            />
          </Grid>
        </Grid>
      </Section>

      <Paper
        elevation={0}
        sx={{
          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          border: "1px solid #E4E4E7",

          borderRadius: {
            xs: "12px",
            sm: "14px",
          },
        }}
      >
        <Typography sx={sectionTitleSx}>
          Property Images{" "}
          <Box
            component="span"
            sx={{
              color: "#e11d48",
              fontWeight: 600,
              ml: 0.25,
            }}
          >
            *
          </Box>
        </Typography>

        <Typography sx={sectionSubtitleSx}>
          Upload high-quality images of the property.
        </Typography>

        <Box
          sx={{
            border: "1px dashed #D4D4D8",
            borderRadius: "12px",
            minHeight: {
              xs: 160,
              sm: 180,
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FAFAFA",
            cursor: "pointer",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "#F7F7F7",
              borderColor: "#A1A1AA",
            },
          }}
        >
          <input
            type="file"
            accept="image/png,image/jpeg"
            id="property-image-upload"
            hidden
            onChange={onImageUpload}
          />

          <label
            htmlFor="property-image-upload"
            style={{
              width: "100%",
              minHeight: "160px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: "16px",
              boxSizing: "border-box",
            }}
          >
            {!image ? (
              <>
                <CloudUploadOutlined
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 34,
                    },
                    color: "#71717A",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: {
                      xs: 12.5,
                      sm: 13,
                    },
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  Upload property images
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    fontSize: {
                      xs: 11,
                      sm: 11.5,
                    },
                    color: "#A1A1AA",
                    textAlign: "center",
                  }}
                >
                  PNG or JPG up to 10MB
                </Typography>
              </>
            ) : (
              <>
                <Box
                  component="img"
                  src={image}
                  alt="Property preview"
                  sx={{
                    width: {
                      xs: "100%",
                      sm: 220,
                    },
                    maxWidth: 220,
                    height: {
                      xs: 140,
                      sm: 130,
                    },
                    objectFit: "cover",
                    borderRadius: "8px",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#71717A",
                    textAlign: "center",
                  }}
                >
                  Click to change image
                </Typography>
              </>
            )}
          </label>
        </Box>

        {errors.image && (
          <Typography
            sx={{
              mt: 1,
              ml: {
                xs: 0.5,
                sm: 1.5,
              },

              fontSize: 12,
              color: "#d32f2f",
            }}
          >
            {errors.image.message}
          </Typography>
        )}
      </Paper>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
          justifyContent: "center",
          alignItems: "stretch",
          gap: 1.5,
          mt: {
            xs: 2,
            sm: 3,
          },
          mb: 2,
          width: "100%",
        }}
      >
        <Button
          type="button"
          onClick={onCancel}
          sx={{
            height: {
              xs: 44,
              sm: 40,
            },
            minWidth: {
              xs: "100%",
              sm: 100,
            },
            px: 2,
            borderRadius: "9px",
            textTransform: "none",
            color: "#52525B",
            border: "1px solid #E4E4E7",
            "&:hover": {
              backgroundColor: "#F9FAFB",
            },
          }}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            height: {
              xs: 44,
              sm: 40,
            },
            minWidth: {
              xs: "100%",
              sm: 130,
            },
            px: 2.5,
            borderRadius: "9px",
            textTransform: "none",
            backgroundColor: "#14152b",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#1f2140",
              boxShadow: "none",
            },
          }}
        >
          {submitText}
        </Button>
      </Box>
    </>
  );
}

export default PropertyForm;
