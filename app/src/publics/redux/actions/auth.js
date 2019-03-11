import axios from 'axios';

import '../../conf';


export const login = (body) => {
	return{
	    type : 'POST_LOGIN',
	    payload : axios.post(`${apiUrl}/auth/login`, body)
	}
}
export const logout = (token, refreshToken) => {
	return{
		type : 'POST_LOGOUT',
		payload : axios.post(`${apiUrl}/auth/logout`, 
			{refreshToken}, 
			{ headers : 
				{ Authorization : `Bearer ${token}`}
			}
		)
	}
}

export const register = (body) => {
	return{
		type : 'POST_REGIST',
		payload : axios.post(`${apiUrl}/auth/register`, body)
	}
}

export const putToken = (token, refToken, email) => {
	return{
		type : 'PUT_TOKEN',
		payload : {token, refToken, email}
	}
}

export const checkLogin = (token) => {
	return{
		type : 'CHECK_LOGIN',
		payload : axios.get(`${apiUrl}/auth/check`,
			{headers : 
				{Authorization : `Bearer ${token}`}
			}
		)
	}
}