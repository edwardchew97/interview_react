import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Theme from '../Config/Theme';
import usePasswordValidation from '../Component/Effect/usePasswordValidation';

export default function LoginScreen(){
    const [email,setEmail] = useState('test@example.com')
    const [password,setPassword] = useState(null)
    const message = usePasswordValidation(password)

    let handleSubmit = () =>{
        if (!message) return true;
        return false
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
                    <Form.Input placeholder='Your password' required onChange={(ev)=>setPassword(ev.target.value)} value={password}
                        error={message??null}
                    />
                </Form.Field>
                <Form.Field>
                    <p style={{textAlign:'end'}}>Not registered yet? <Link to='/register'>Sign Up</Link></p>
                </Form.Field>
                <Button fluid type='submit' positive>Submit</Button>
            </Form>
        </div>
    );
}