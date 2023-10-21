import { Routes, Route,BrowserRouter } from "react-router-dom"
import { AuthGuard } from "./AuthGuard"
import { Login } from "../view/pages/Login"
import { Register } from "../view/pages/Register"
import { AuthLayout } from "../view/layouts/AuthLayout"
import { Cars } from "../view/pages/Cars"
import Dashboard from "../view/pages/Dashboard"


export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={
                    <AuthGuard isPrivate={false} />
                }>
                    <Route element={<AuthLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/cars" element={<Cars />} />
                    </Route>
                </Route>


                <Route element={<AuthGuard isPrivate={false}  />}>
                   <Route path="/" element={<Login />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}