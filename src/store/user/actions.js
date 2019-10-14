export const USER_GET_RATINGS = 'USER_GET_RATINGS'
export const USER_GET_SELECTED_RATINGS = 'USER_GET_SELECTED_RATINGS'
export const USER_GET_COMMENTS = 'USER_GET_COMMENTS'
export const USER_GET_SELECTED_COMMENTS = 'USER_GET_SELECTED_COMMENTS'

export const actionUserRatings = userRatings => ({
    type: USER_GET_RATINGS,
    payload: userRatings
})

export const actionUserSelectedRatings = userSelectedRatings => ({
    type: USER_GET_SELECTED_RATINGS,
    payload: userSelectedRatings
})

export const actionUserComments = userComments => ({
    type: USER_GET_COMMENTS,
    payload: userComments
})

export const actionUserSelectedComments = userSelectedComments => ({
    type: USER_GET_SELECTED_COMMENTS,
    payload: userSelectedComments
})