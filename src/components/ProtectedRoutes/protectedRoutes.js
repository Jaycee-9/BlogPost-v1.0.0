import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useContext(DataContext);

  return user.name ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
