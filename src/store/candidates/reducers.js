import { 
    CANDIDATES_GET_DATA, 
    CANDIDATES_GET_ITEM,
    CANDIDATES_GET_RATINGS,
    CANDIDATES_GET_COMMENTS,
    CANDIDATES_GET_SET_BUF_DATA_FOR_SEARCH } from './actions'

const defaultState = {
    dataCandidates: [],
    bufDataForSearch: [],
    item: {},
    ratings: [],
    comments: []
}

export const candidatesReducer = (state = defaultState, action) => {
    switch(action.type){
        case CANDIDATES_GET_DATA:
            return{
                ...state,
                dataCandidates: action.payload
            }
        case CANDIDATES_GET_ITEM:
            return{
                ...state,
                item: action.payload
            }
        case CANDIDATES_GET_RATINGS:
            return{
                ...state,
                ratings: action.payload
            }    
        case CANDIDATES_GET_COMMENTS:
            return{
                ...state,
                comments: action.payload
            }
        case CANDIDATES_GET_SET_BUF_DATA_FOR_SEARCH:
            return{
                ...state,
                bufDataForSearch: action.payload
            }
    }
    return state
}