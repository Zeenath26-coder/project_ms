import { type Property } from "../types/property";

import propertyImage1 from "../assests/oceanview.jpg";
import propertyImage2 from "../assests/greenvalley.jpg";
import propertyImage3 from "../assests/citycenter.jpg";

export const properties: Property[] = [
  {
    id: "PROP-001",
    name: "Ocean View Apartment",
    type: "Apartment",
    description: "A modern apartment with a beautiful ocean view.",
    status: "Available",

    address: "123 Marine Drive",
    city: "Colombo",
    postalCode: "00300",

    bedrooms: 3,
    bathrooms: 2,
    area: 1850,

    monthlyRent: 2500,
    securityDeposit: 5000,

    image: [propertyImage1],
  },

  {
    id: "PROP-002",
    name: "Green Villa",
    type: "villa",
    description: "A modern villa.",
    status: "Rented",

    address: "13 Marine Drive",
    city: "Colombo",
    postalCode: "00300",

    bedrooms: 3,
    bathrooms: 1,
    area: 1250,

    monthlyRent: 2700,
    securityDeposit: 21500,

    image: [propertyImage2],
  },
  {
    id: "PROP-003",
    name: "City Heights",
    type: "Condo",
    description: "A modern condo.",
    status: "Maintenance",

    address: "14 Marine Drive",
    city: "Colombo",
    postalCode: "00300",

    bedrooms: 5,
    bathrooms: 1,
    area: 1350,

    monthlyRent: 2500,
    securityDeposit: 5000,

    image: [propertyImage3],
  },
];
