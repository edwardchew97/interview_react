import React, { useState, useEffect } from 'react';
import Theme from '../Config/Theme';
import { Table, Button, Dimmer, Loader, Form } from 'semantic-ui-react';
import api from '../Utilities/api';
import cookie from '../Utilities/cookie';
import store from '../Utilities/store';
import { actions } from '../Utilities/actions';

export default function HomeScreen(){
    const [users,setUsers] = useState([])
    const [name,setName] = useState('')
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async() => {
            const data = await api.listUsers(name)
            setUsers(data.data)
            setIsLoading(false)
        }
        let searching = setTimeout(()=>fetchUsers(),300)
        return ()=>clearTimeout(searching)
    },[name])

    function logout(){
        cookie.remove('access_token');
        store.dispatch(actions.logout())
    }

    return (
        <div style={Theme.screen}>
            {
                isLoading?
                <Dimmer active>
                    <Loader />
                </Dimmer>:
                <Table celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>

                            </Table.HeaderCell>
                            <Table.HeaderCell>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                <Form.Input placeholder='Name Search' fluid value={name} 
                                    onChange={(ev)=>setName(ev.target.value)}
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {users.map((user,index)=>{
                            return(
                                <Table.Row key={user._id}>
                                    <Table.Cell>{index+1}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>{user.name}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            }
            <Button color='red' style={{float:'right'}}
                onClick = {logout}
            >
                Logout
            </Button>
        </div>
    )
}