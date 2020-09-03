import store from "./store";

const rp = require("request-promise")

const url = 'https://sleepy-basin-18215.herokuapp.com'

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
    listUsers : () => {
        return rp({
            method : 'GET',
            json: true,
            headers:{
                'Authorization' : 'Bearer '+ store.getState().access_token
            },  
            uri : url+'/users'
        });
    }
}

export default api;