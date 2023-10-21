import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/userContext";

interface AuthguardProps {
    isPrivate: boolean;
}

export function AuthGuard({isPrivate}: AuthguardProps) {
    const { user } = useUser();

    if(!user && !isPrivate) {
        return <Navigate to="/login" replace />
    }

    // if(user.loggedIn) {
    //     return <Navigate to="/dashboard" replace />
    // }

    return (
        <Outlet />
    )
}