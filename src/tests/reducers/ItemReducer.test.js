import Item from '../../reducers/ItemReducer'
import uuid from 'react-uuid'

test('should set up default item values', () => {
    const state = Item(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        items:[
            { id: 111, name: 'eggs' },
            { id: 111, name: 'milk' },
            { id: 111, name: 'bread' },
            { id: 111, name: 'cheaps' },
        ]
    })
})

 

