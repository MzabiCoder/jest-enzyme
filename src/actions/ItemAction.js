import { DEL_ITEM, ADD_ITEM, GET_ITEMS,UP_ITEM,SET_ITEM,CLEAR_ITEM } from './types'

export const getItems = () => {
    return {
        type:GET_ITEMS
    }
}

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload:item
    }
}

export const delItem = id => {
    return {
        type: DEL_ITEM,
        payload:id
    }
}

export const update = item => {
    return {
        type: UP_ITEM,
        payload:item
    }
}

export const setCurrent = (current) => {
    return {
        type: SET_ITEM,
        payload:current
    }
}

export const ClearCurrent = () => {
    return {
        type: CLEAR_ITEM,
    }
}
