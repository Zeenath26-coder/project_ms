import { createContext, useContext, useState } from "react";
import type { Property } from "../types/property";
import { properties as mockProperties } from "../data/properties";

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: Property) => void;
  updateProperty: (property: Property) => void;
  deleteProperty: (id: string) => void;
}

const PropertyContext = createContext<PropertyContextType | undefined>(
  undefined,
);

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  const [properties, setProperties] = useState<Property[]>(mockProperties);

  const addProperty = (property: Property) => {
    setProperties((prev) => [...prev, property]);
  };

  const updateProperty = (property: Property) => {
    setProperties((prev) =>
      prev.map((item) => (item.id === property.id ? property : item)),
    );
  };

  const deleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PropertyContext.Provider
      value={{ properties, addProperty, updateProperty, deleteProperty }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("useProperties must be used inside PropertyProvider");
  }
  return context;
}
