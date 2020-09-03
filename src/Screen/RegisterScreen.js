import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Theme from '../Config/Theme';
import { Link } from 'react-router-dom';
import usePasswordValidation from '../Component/Effect/usePasswordValidation';

export default function RegisterScreen(){
    const [email,setEmail] = useState('test@example.com')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const message = usePasswordValidation(password)

    let handleSubmit = () =>{
        console.log('asdasd')
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
                
                <div style={{display:'flex'}}>
                    <Link to='/' style={{flex:1}}>
                        <Button type='submit' fluid>Login</Button>
                    </Link>
                    <Button type='submit' positive style={{flex:1}}>Register</Button>
                </div>
            </Form>
        </div>
    );
}