import React from 'react';
import './Action.css';

const Action = props => (
  <div>
    <button
      className="actionBtn"
      onClick={props.pickToDoItem}
      disabled={!props.hideOrShow}
    >
      What Should I Do?
    </button>
  </div>
);

export default Action;
