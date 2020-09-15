import uuid from 'react-uuid'
import {DEL_ITEM,ADD_ITEM,GET_ITEMS,UP_ITEM} from '../actions/types'
const Istate = {
    items:[
    { id: 111, name: 'eggs' },
    { id: 111, name: 'milk' },
    { id: 111, name: 'bread' },
    { id: 111, name: 'cheaps' },
]}

export default function (state = Istate,action) {
    const { payload, type } = action
    switch (type) {
        case ADD_ITEM:
            return {
                ...state,
                items:[...state.items,payload]
            }
        case DEL_ITEM:
            return {
                ...state,
                items:state.items.filter(item=>item.id!==payload)
            }
        case GET_ITEMS:
            return {
                ...state
            }
        case UP_ITEM:
            return {
                ...state,
                items:state.items.map(item=>item.id===payload.id ? payload:item)
            }
        default:
            return state
    }
}
    
