import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = () =>
{
    const { user ,isAuthenticated } = useAuth();
    console.log(user, isAuthenticated);
    if (!isAuthenticated) return <Navigate to='/login' replace />

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ProtectedRoute