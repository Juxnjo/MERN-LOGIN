import { useAuth } from "./context/AuthContext";

const ProtectedRoute = () =>
{
    const { user ,isAuthenticated } = useAuth();
    console.log(user, isAuthenticated);
    
    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute