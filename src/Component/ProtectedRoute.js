import { Redirect } from "react-router-dom";

export default function ProtectedRoute({...props}){
    return (
        <Redirect to='/login' />
    )
}