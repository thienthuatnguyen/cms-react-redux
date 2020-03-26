import axios from 'axios';

// Import custom actionType
import * as AuthAction from '../actions/authAction';
import history from '../utils/history';

import {BASE_URL, API_URL} from '../config/config';
import {setToken, clearToken, setPermissions, clearPermissions, setUserData, clearUserData} from '../utils/storageUtil';

export function login({email, password}) {

    return function (dispatch) {
        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {

            dispatch(AuthAction.loginSuccess(response.data.token));
            setUserData(JSON.stringify({
                userId: response.data.id,
                firstName: response.data.first_name,
                lastName: response.data.last_name,
                avatar: response.data.avatar,
            }));
            setToken(response.data.token);
            setPermissions(response.data.permissions);

            history.push('/home');
        })
            .catch((error) => {
                dispatch(AuthAction.loginFailure(error.response.data));
            });
    };
}

export function logout() {
    return function (dispatch) {

        clearToken();
        clearPermissions();
        clearUserData();

        dispatch(AuthAction.logoutSuccess());

        history.push('/');
        // window.location.href = BASE_URL;
        return false;
    };
}

export function permissions(section) {
    const data = localStorage.getItem('permissions');
    const items = JSON.parse(data);
    let result = [];
    items.forEach(item => {
        if (item.permission === section || item.permission === 'superadmin') result.push(item.action);
    });
    return result;
}

export function isAdmin(data) {
    return data.indexOf("all") != -1;
}

export function canRead(data) {
    return data.indexOf("all") != -1 || data.indexOf("read") != -1;
}

export function canWrite(data) {
    return data.indexOf("all") != -1 || data.indexOf("write") != -1;
}

export function canDelete(data) {
    return data.indexOf("all") != -1 || data.indexOf("delete") != -1;
}