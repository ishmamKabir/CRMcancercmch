import * as actionTypes from './actionTypes';
import history from '../history'


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
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    return dispatch => {
        dispatch( {type: actionTypes.AUTH_LOGOUT});
        history.push('/login');
        
    }
}

export const authKeepLogin = (userName, password) => {
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
}

export const authLogin = (userName, password) => {
    return dispatch => {
        if (userName === 'Ishmam' && password === '12345'){
            dispatch(authSuccess(1));
            history.push('/');
        }else{
            dispatch(authFail('Invalid username or password'));
        }    
    }
}

export const authIsLoggedIn = (userName, password) => {
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
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userName = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        if (token === null) {
            dispatch(logout());
        } else {
            dispatch(authIsLoggedIn(userName,password));
        }
    
    }
}



/*export const authLogin = (userName, password) => {
    return dispatch => {
        dispatch(authStart());
        post('/rest-auth/login', {
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

}*/