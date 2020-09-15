import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { update } from '../actions/ItemAction'
import {connect} from 'react-redux'


const ModalExample = (props) => {

  const {
    buttonLabel,
      className,
      item,
      update
  } = props;
  console.log(item);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(item.name);

  const toggle = () => setModal(!modal);
    const UpdareFunctin = () => {
        let updateValue = {
            id: item.id,
            name:value
        }
        update(updateValue)
        toggle()
} 
 
  return (
    <div>
      <Button color="success" onClick={toggle} className="mr-3">Edit </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
                  <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="form-control"/>
        </ModalBody>
        <ModalFooter>
                  <Button color="primary" onClick={toggle} onClick={UpdareFunctin}>Edit</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default connect(null,{update})(ModalExample)