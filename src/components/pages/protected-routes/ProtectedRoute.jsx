import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const userAuth = useSelector((state) => state.userAuth);

  if (userAuth.email) {
    return props.children;
  }
  return <Navigate to="/log-in" />;
};

export default ProtectedRoute;
