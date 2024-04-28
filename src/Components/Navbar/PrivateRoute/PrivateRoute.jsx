import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <h1 className="text-5xl text-center">
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </h1>
    );
  }
  if (!user) {
    return <Navigate to="/signin" state={location?.pathname || "/"}></Navigate>;
  }
  return <div>{children}</div>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
