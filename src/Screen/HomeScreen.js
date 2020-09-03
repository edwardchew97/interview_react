import React, { useState, useEffect } from 'react';
import Theme from '../Config/Theme';
import { Table, Button, Dimmer, Loader } from 'semantic-ui-react';
import api from '../Utilities/api';
import cookie from '../Utilities/cookie';
import store from '../Utilities/store';
import { actions } from '../Utilities/actions';

export default function HomeScreen(){
    const [users,setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async() => {
            const data = await api.listUsers()
            setUsers(data.data)
        }
        fetchUsers()
    },[])

    function logout(){
        cookie.remove('access_token');
        store.dispatch(actions.logout())
    }

    return (
        <div style={Theme.screen}>
            {
                users.length>0?
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
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
                </Table>:
                <Dimmer active>
                    <Loader />
                </Dimmer>
            }
            <Button color='red' style={{float:'right'}}
                onClick = {logout}
            >
                Logout
            </Button>
        </div>
    )
}