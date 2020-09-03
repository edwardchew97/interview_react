import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useSelector } from 'react-redux';
import store from '../Utilities/store';
import { actions } from '../Utilities/actions';
import HomeScreen from '../Screen/HomeScreen';
import ProtectedRoute from '../Component/ProtectedRoute';

export default function MainRouter(){
    const alert = useSelector(state => state.alert)
    const status = alert?alert.status:null

    return (
        <>
            <BrowserRouter>
                <Route exact path="/"> <LoginScreen/> </Route>
                <Route exact path="/register"> <RegisterScreen/> </Route>
                <ProtectedRoute exact path="/home"> <HomeScreen/> </ProtectedRoute>
            </BrowserRouter>
            
            {
                alert ?
                <SweetAlert
                    success = {status === 'success'}
                    error = {status === 'error'}
                    title={alert.status}
                    onConfirm={()=>{store.dispatch(actions.alert(null))}}
                >
                    {alert.message}
                </SweetAlert>:
                null
            }
        </>
    );
}