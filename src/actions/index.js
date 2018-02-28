// action types
const LOGIN='LOGIN';
const LOGOUT='LOGOUT';

/*登录*/
export const login=(data)=>{
	return{
		type: LOGIN,
		data
	}
}
/*登出*/
export const logout=(data)=>{
	return{
		type: LOGOUT,
	}
}