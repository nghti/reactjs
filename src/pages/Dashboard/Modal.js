import React from 'react';

export default function Modal(props) {
  const num = 4;
  return (
    <div className={props.toggleModel ? 'active' : 'no-active'}>
      <h4>
        <span
          className="close"
          onClick={(e) => {
            props.handlePick(e, num);
          }}>
          X
        </span>
      </h4>
      {props.children}
    </div>
  );
}
