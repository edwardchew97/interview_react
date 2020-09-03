import { Redirect, Route } from "react-router-dom";
import React from 'react';
import { useSelector } from "react-redux";

export default function ProtectedRoute(props){
    const access_token = useSelector(state => state.access_token)

    return access_token?
        <Route {...props}/>:
        <Redirect to='/' />
    
}