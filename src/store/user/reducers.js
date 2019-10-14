import {  USER_GET_RATINGS,
    USER_GET_SELECTED_RATINGS,
    USER_GET_COMMENTS,
    USER_GET_SELECTED_COMMENTS } from './actions'

const defaultState = {
    userRatings: [],
    userSelectedRatings: {},
    userComments: [],
    userSelectedComments: {},
}


export const userReducer = (state = defaultState, action) => {
    //console.log('----------------------------------', action.payload)
    switch(action.type){
        case USER_GET_RATINGS:
            return{
                ...state,
                userRatings: action.payload
            }
        case USER_GET_SELECTED_RATINGS:
            return{
                ...state,
                userSelectedRatings: action.payload
            }

        case USER_GET_COMMENTS:
            return{
                ...state,
                userComments: action.payload
            }
        case USER_GET_SELECTED_COMMENTS:
                console.log('----------------------------------', action.payload)
            return{
                ...state,
                userSelectedComments: action.payload
            }
    }
    return state
}