import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = () =>
{
    const { loading ,isAuthenticated } = useAuth();
    console.log(loading, isAuthenticated);
    if (loading) return <h1>Loading...</h1>;
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ProtectedRoute