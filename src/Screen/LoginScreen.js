import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';
import Theme from '../Config/Theme';
import usePasswordValidation from '../Component/Effect/usePasswordValidation';
import api from '../Utilities/api';
import store from '../Utilities/store';
import { actions } from '../Utilities/actions';
import LoadingButton from '../Component/LoadingButton';
import Cookies from 'universal-cookie';
import cookie from '../Utilities/cookie';
import { useSelector } from 'react-redux';

export default function LoginScreen(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory();
    const access_token = useSelector(state => state.access_token)
    const message = usePasswordValidation(password)
    const location = useLocation()


    useEffect(() => {
        if (access_token) 
            history.push('/home')
        
        if (location.state){
            store.dispatch(actions.alert({
                message:location.state.registerMessage,
                status:'success'
            }))
        }
    },[])

    let handleSubmit = () =>{
        if (message) return false;

        store.dispatch(actions.startLoading())
        return api.login(email,password).then(({data})=>{
            cookie.set('access_token',data.access_token)
            store.dispatch(actions.login({
                user:data.user,
                access_token:data.access_token
            }))
            store.dispatch(actions.stopLoading())
            history.push('/home')
        }).catch(err =>{
            store.dispatch(actions.alert({
                message:err.error.message[0],
                status:'error'
            }))
            store.dispatch(actions.stopLoading())
        })
    }

    return (
        <div style={Theme.screen}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='test@example.com' type='email' required onChange={(ev)=>setEmail(ev.target.value)} value={email}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Form.Input placeholder='Your password' required onChange={(ev)=>setPassword(ev.target.value)} value={password} type='password'
                        error={message??null}
                    />
                </Form.Field>
                <Form.Field>
                    <p style={{textAlign:'end'}}>Not registered yet? <Link to='/register'>Sign Up</Link></p>
                </Form.Field>
                <LoadingButton fluid type='submit' color='green' content='Submit'/>
            </Form>
        </div>
    );
}