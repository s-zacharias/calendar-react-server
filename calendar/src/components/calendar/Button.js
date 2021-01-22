import React from 'react';

const Button = ({ side, label, onClick }) => {
  return (
    <div className={`buttons  ${side}`}>
      <button className={`${side}`} onClick={onClick}>
        <strong>{label}</strong>
      </button>
    </div>
  );
};

export default Button;
