export interface Property {
  name: string;
  id: string;
  type: string;
  description: string;
  status: "Available" | "Occupied" | "Rented" | "Maintenance";
  address: string;
  city: string;
  postalCode: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  monthlyRent: number;
  securityDeposit: number;
  image: string[];
 
}
