import { addItem, delItem, update } from '../../actions/ItemAction'
import {DEL_ITEM,UP_ITEM,ADD_ITEM} from '../../actions/types'

test('shoudl set up remove item', () => {
    const action = delItem(1234)
    expect(action).toEqual({
        type: DEL_ITEM,
        payload:1234
    })
})

test('shoudl set up edit item', () => {
    const action = update({id:1,name:'eggs'})
    expect(action).toEqual({
        type: UP_ITEM,
        payload:{id:1,name:'eggs'}
    })
})

test('shoudl set up add item', () => {
    const itemData = {
        name: 'eggs',
        id:expect.any(String)
    }
    const action = addItem(itemData)
    expect(action).toEqual({
        type: ADD_ITEM,
        payload:{...itemData}
    })
})