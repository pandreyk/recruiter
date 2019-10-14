import { AUTH, AUTH_USER } from './actions'

const defaultState = {
    // auth: localStorage.getItem('auth'),
    id_user: localStorage.getItem('id_user'),
}

export const authReducer = (state = defaultState, action) => {
    switch(action.type){
        // case AUTH:
        //     return{
        //         ...state,
        //         auth: action.payload
        //     }
        case AUTH_USER:
            return{
                ...state,
                id_user: action.payload
            }    
    }
    return state
}