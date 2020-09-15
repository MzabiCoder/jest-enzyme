import React,{useEffect} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
 import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap'
import { connect } from 'react-redux'
import {getItems,addItem,delItem} from '../actions/ItemAction'
import uuid from 'react-uuid'
import  Edit from './Edit'


const List = ({getItems,addItem,delItem,item:{items}}) => {
    useEffect(() => {
        getItems()
    },[getItems])
    return (
        <Container>
            <Button
                color="dark"
                style={{ margin: '2rem 0rem' }}
                onClick={() => {
                    const name = prompt('enter item')
                    if (name) {
                        const newItem = {
                            id: uuid(),
                            name
                        }
                        addItem(newItem)  
                    }
                }}
            >
                Add item
            </Button>
          <ListGroup>
                <TransitionGroup className="shopping">
                    {items.map(( item) => (
                        <CSSTransition key={item.id} classNames="fade">
                     
                            <ListGroupItem className="flex">
                                <div className="span"></div>
                                <Button
                                    className="btn btn-danger sm mr-3"
                                    color="white"
                                    id="remove-item"
                                    onClick={() => delItem(item.id)}
                                >
                                        &times;
                                </Button>
                                <Edit item={item} />
                                    {item.name}
                            </ListGroupItem>
               
                        </CSSTransition>
               ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}
const map = state => ({
    item:state.item
})
export default connect(map,{getItems,addItem,delItem})(List)
