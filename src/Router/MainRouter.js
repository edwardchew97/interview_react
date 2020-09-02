import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LoginScreen from '../Screen/LoginScreen';

export default function MainRouter(){
    return (
        <BrowserRouter>
            <Route exact path="/"> <LoginScreen/> </Route>
        </BrowserRouter>
    );
}