import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Theme from '../Config/Theme';

export default function RegisterScreen(){
    return (
        <div style={Theme.screen}>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='test@example.com' required type='email'/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Your password' required type='password'/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input placeholder='Insert your password again' required type='password'/>
                </Form.Field>
                
                <div style={{display:'flex'}}>
                    <Button type='submit'style={{flex:1}}>Login</Button>
                    <Button type='submit' positive style={{flex:1}}>Register</Button>
                </div>
            </Form>
        </div>
    );
}