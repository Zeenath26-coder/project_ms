export const nameValidation = {
  required: "Property name is required",
};

export const propertyIdValidation = {
  required: "Property ID is required",
};

export const propertyTypeValidation = {
  required: "Property type is required",
};

export const descriptionValidation = {
  minLength: {
    value: 10,
    message: "Description must be at least 10 characters.",
  },
};

export const addressValidation = {
  required: "Address is required",
};

export const cityValidation = {
  required: "City is required",
};

export const postalCodeValidation = {
  pattern: {
    value: /^[0-9]+$/,
    message: "Postal code must contain only numbers",
  },
};

export const bedroomsValidation = {
  valueAsNumber: true,
  min: {
    value: 0,
    message: "Number of bedrooms cannot be negative",
  },
};

export const bathroomsValidation = {
  valueAsNumber: true,
  min: {
    value: 0,
    message: "Number of bathrooms cannot be negative",
  },
};

export const areaValidation = {
  required: "Area is required",
  valueAsNumber: true,
  min: {
    value: 1,
    message: "Area must be greater than 0",
  },
};

export const monthlyRentValidation = {
  required: "Monthly rent is required",
  valueAsNumber: true,
  min: {
    value: 1,
    message: "Monthly rent must be greater than 0",
  },
};

export const securityDepositValidation = {
  required: "Security deposit is required",
  valueAsNumber: true,
  min: {
    value: 0,
    message: "Security deposit cannot be negative",
  },
};
export const validateImage = (image: string[]) => {
  if (!image || image.length === 0) {
    return "Property image is required";
  }

  return true;
};
