import { Routes, Route } from "react-router-dom";
import Login from "@/pages/loginPage/LoginPage";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import Properties from "@/pages/properties/Properties";
import CreateProperty from "@/pages/properties/CreateProperty";
import PropertyDetails from "@/pages/properties/PropertiesDetails";
import EditProperty from "@/pages/properties/EditProperty";
import Profile from "@/pages/profile/Profile";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/new" element={<CreateProperty />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/properties/:id/edit" element={<EditProperty />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
