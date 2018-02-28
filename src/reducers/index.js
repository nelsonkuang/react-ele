// action types
const LOGIN='LOGIN';
const LOGOUT='LOGOUT';

//reducer
export default function(state,action){
	if(!state){
		state={
			loginPart:{islogin:false,name:'',phone:0},
			allSelected:{}
		}
	}
	switch(action.type){
		case LOGIN:
			return{
				...state,
				loginPart:{...action.data}
			}
		case LOGOUT:
			return{
				...state,
				loginPart:{islogin:false,name:'',phone:0}
			}
		default:
			return state;
	}
}