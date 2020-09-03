import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Theme from '../Config/Theme';
import { Link, useHistory } from 'react-router-dom';
import usePasswordValidation from '../Component/Effect/usePasswordValidation';
import LoadingButton from '../Component/LoadingButton';
import store from '../Utilities/store';
import api from '../Utilities/api';
import { actions } from '../Utilities/actions';

export default function RegisterScreen(){
    const [email,setEmail] = useState('test@example.com')
    const [password,setPassword] = useState('testing12321A')
    const [name,setName] = useState('tester')
    const [confirmPassword,setConfirmPassword] = useState('testing12321A')
    const history = useHistory();

    const message = usePasswordValidation(password)

    let handleSubmit = () =>{
        if (message) return false;
        if (password!==confirmPassword) return false;

        store.dispatch(actions.startLoading())
        return api.register(email,password,name).then(result=>{
            store.dispatch(actions.stopLoading())
            history.push('/',{registerMessage:'Registered Successfully'})
        }).catch(err=>{
            store.dispatch(actions.stopLoading())
            store.dispatch(actions.alert({
                message:err.error.message[0],
                status:'error'
            }))
        })
    }

    return (
        <div style={Theme.screen}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <Form.Input placeholder='test@example.com' required type='email' onChange={(ev)=>setEmail(ev.target.value)} value={email}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Form.Input placeholder='Your password' required type='password' onChange={(ev)=>setPassword(ev.target.value)} value={password}
                        error={message??null}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <Form.Input placeholder='Insert your password again' required type='password' onChange={(ev)=>setConfirmPassword(ev.target.value)} value={confirmPassword}
                        error={password===confirmPassword ? null : 'Password is different with Confirm Password'}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <Form.Input placeholder='Insert your name' required type='string' onChange={(ev)=>setName(ev.target.value)} value={name}/>
                </Form.Field>
                
                <div style={{display:'flex'}}>
                    <Link to='/' style={{flex:1}}>
                        <Button type='submit' fluid content='Login'/>
                    </Link>
                    <LoadingButton type='submit' positive style={{flex:1}} content='Register'/>
                </div>
            </Form>
        </div>
    );
}