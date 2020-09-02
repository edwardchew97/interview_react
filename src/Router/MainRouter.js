import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';

export default function MainRouter(){
    return (
        <BrowserRouter>
            <Route exact path="/"> <LoginScreen/> </Route>
            <Route exact path="/register"> <RegisterScreen/> </Route>
        </BrowserRouter>
    );
}