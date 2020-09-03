import React from 'react';
import { Button } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function LoadingButton(props){
    const isLoading = useSelector(state => state.isLoading)

    return (
        <Button {...props} 
            content = {isLoading?'Loading...':props.content}
            disabled = {isLoading}
        />
    )
}
