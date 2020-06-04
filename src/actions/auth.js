import * as actionTypes from './actionTypes';
import history from '../history'
import Axios from 'axios';


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: 'Invalid Username or Password'
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

/*export const authKeepLogin = (userName, password) => {
    return dispatch => {
        if (userName === 'Ishmam' && password === '12345'){
            dispatch(authSuccess(1));
            localStorage.setItem('token', 1);
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            history.push('/');
        }else{
            dispatch(authFail('Invalid username or password'));
        } 
    }
}*/

export const authKeepLogin = (userName, password) => {
    return dispatch => {
        dispatch(authStart());
        Axios.post('https://www.cancercmch.xyz/rest-auth/login/', {
            username: userName,
            password: password
        })
        .then(res=> {
            const token = res.data.key;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            dispatch(authSuccess(token));
            history.push('/');
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }

}

/*export const authLogin = (userName, password) => {
    return dispatch => {
        if (userName === 'Ishmam' && password === '12345'){
            dispatch(authSuccess(1));
            history.push('/');
        }else{
            dispatch(authFail('Invalid username or password'));
        }    
    }
}*/

/*export const authIsLoggedIn = (userName, password) => {
    return dispatch => {
        if (userName === 'Ishmam' && password === '12345'){
            dispatch(authSuccess(1));
            localStorage.setItem('token', 1);
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            
        }else{
            dispatch(authFail('Invalid username or password'));
        } 
    }
}*/

export const authIsLoggedIn = (userName, password) => {
    return dispatch => {
        dispatch(authStart());
        Axios.post('https://www.cancercmch.xyz/rest-auth/login/', {
            username: userName,
            password: password
        })
        .then(res=> {
            const token = res.data.key;
            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName);
            localStorage.setItem('password', password);
            dispatch(authSuccess(token));
            history.push('/');
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userName = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        if (token === null) {
            dispatch(logout());
        } else if (userName === null && password == null) {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            }else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }else {
            dispatch(authIsLoggedIn(userName,password));
        }
    
    }
}


export const authLogin = (userName, password) => {
    return dispatch => {
        dispatch(authStart());
        Axios.post('https://www.cancercmch.xyz/rest-auth/login/', {
            username: userName,
            password: password
        })
        .then(res=> {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 72000 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(72000));
            history.push('/');
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }

}