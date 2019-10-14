export const OPTIONS_GET_STATUSES = 'OPTIONS_GET_STATUSES'
export const OPTIONS_GET_SELECTED_STATUS = 'OPTIONS_GET_SELECTED_STATUS'
export const OPTIONS_GET_TAGS = 'OPTIONS_GET_TAGS'
export const OPTIONS_GET_SELECTED_TAGS = 'OPTIONS_GET_SELECTED_TAGS'

export const actionStatuses = statuses => ({
    type: OPTIONS_GET_STATUSES,
    payload: statuses
})

export const actionSelectedStatus = selectedStatus => ({
    type: OPTIONS_GET_SELECTED_STATUS,
    payload: selectedStatus
})

export const actionTags = tags => ({
    type: OPTIONS_GET_TAGS,
    payload: tags
})

export const actionSelectedTags = selectedTags => ({
    type: OPTIONS_GET_SELECTED_TAGS,
    payload: selectedTags
})