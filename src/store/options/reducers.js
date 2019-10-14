import { OPTIONS_GET_STATUSES, 
    OPTIONS_GET_TAGS,
    OPTIONS_GET_SELECTED_STATUS, 
    OPTIONS_GET_SELECTED_TAGS } from './actions'

const defaultState = {
    statuses: [],
    selectedStatus: {},
    tags: [],
    selectedTags: []
}

export const optionsReducer = (state = defaultState, action) => {
    switch(action.type){
        case OPTIONS_GET_STATUSES:
            return{
                ...state,
                statuses: action.payload
            }
        case OPTIONS_GET_SELECTED_STATUS:
            return{
                ...state,
                selectedStatus: action.payload
            }
        case OPTIONS_GET_TAGS:
            return{
                ...state,
                tags: action.payload
            }
        case OPTIONS_GET_SELECTED_TAGS:
            return{
                ...state,
                selectedTags: action.payload
            }
    }
    return state
}