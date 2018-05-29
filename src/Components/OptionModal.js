import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal
    isOpen={props.isOpen}
    contentLabel="Selected Option"
    onRequestClose={props.close}
  >
    <h3>Selected Option</h3>
    {props.isOpen && <p>{props.isOpen}</p>}
    <button onClick={props.close}>Okay</button>
  </Modal>
);

export default OptionModal;
