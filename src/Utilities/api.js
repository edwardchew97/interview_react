import store from "./store";

const rp = require("request-promise")

const url = 'https://sleepy-basin-18215.herokuapp.com'
// const url = 'http://localhost:3000'

const api = {
    login : (email,password) => {
        return rp({
            method : 'POST',
            json: true,
            uri : url+'/auth/login',
            form:{email,password}
        });
    },
    register : (email,password,name) => {
        return rp({
            method : 'POST',
            json: true,
            uri : url+'/auth/register',
            form:{email,password,name}
        });
    },
    listUsers : (name) => {
        const uri = name? url+`/users?name=${name}`:url+`/users`
        return rp({
            method : 'GET',
            json: true,
            headers:{
                'Authorization' : 'Bearer '+ store.getState().access_token
            },  
            uri
        });
    }
}

export default api;