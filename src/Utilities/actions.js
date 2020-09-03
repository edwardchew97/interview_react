import { createAction } from "@reduxjs/toolkit";

export const actions = {
    startLoading : createAction('startLoading'),
    stopLoading : createAction('stopLoading'),
    login : createAction('auth/login'),
    logout : createAction('auth/logout'),
    alert : createAction('alert')
}