import { configureStore, createReducer } from '@reduxjs/toolkit'
import { actions } from './actions'
import cookie from './cookie'


const defaultState = {
    user:null,
    access_token:cookie.get('access_token'),
    isLoading:false,
    alert:null
}

const reducer = createReducer(defaultState,{
    [actions.startLoading.type] : (state) => ({
        ...state, isLoading:true
    }),
    [actions.stopLoading.type] : (state) => ({
        ...state, isLoading:false
    }),
    [actions.login.type] : (state,action) => ({
        ...state, user:action.payload.user, access_token:action.payload.access_token
    }),
    [actions.logout.type] : (state,action) => ({
        ...state, user:null, access_token:null
    }),
    [actions.alert.type] : (state,action) => ({
        ...state, alert:action.payload
    })
})

export default configureStore({
    reducer: reducer
})