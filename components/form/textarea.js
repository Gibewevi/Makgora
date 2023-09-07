import React, { useState } from 'react';

const TextArea = ({ id, label, placeholder, rows, maxLength, mandatory }) => {
  const [textValue, setTextValue] = useState('');

  const handleTextAreaChange = (event) => {
    const { value } = event.target;

    const truncatedValue = maxLength ? value.slice(0, maxLength) : value;

    setTextValue(truncatedValue);
  };

  return (
    <div className="formGroup">
      {label && (
        <label className="formGroup__label" htmlFor={id}>
          {label}
          {mandatory && <span className="mandatory">*</span>}:
        </label>
      )}
      <textarea
        className="formGroup__input"
        id={id}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        value={textValue}
        onChange={handleTextAreaChange}
      ></textarea>
      {maxLength && <p>{textValue.length}/{maxLength}</p>}
    </div>
  );
};

export default TextArea;