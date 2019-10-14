export const CANDIDATES_GET_DATA = 'CANDIDATES_GET_DATA'
export const CANDIDATES_GET_ITEM = 'CANDIDATES_GET_ITEM'
export const CANDIDATES_GET_RATINGS = 'CANDIDATES_GET_RATINGS'
export const CANDIDATES_GET_COMMENTS = 'CANDIDATES_GET_COMMENTS'
export const CANDIDATES_GET_SET_BUF_DATA_FOR_SEARCH = 'CANDIDATES_GET_SET_BUF_DATA_FOR_SEARCH'

export const actionCandidates = dataCandidates => ({
    type: CANDIDATES_GET_DATA,
    payload: dataCandidates
})

export const actionItem = item => ({
    type: CANDIDATES_GET_ITEM,
    payload: item
})

export const actionRatings = ratings => ({
    type: CANDIDATES_GET_RATINGS,
    payload: ratings
})

export const actionComments = comments => ({
    type: CANDIDATES_GET_COMMENTS,
    payload: comments
})

export const actionBufDataForSearch = bufDataForSearch => ({
    type: CANDIDATES_GET_SET_BUF_DATA_FOR_SEARCH,
    payload: bufDataForSearch
})