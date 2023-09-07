import React, { useState } from 'react';

const TextInput = ({
  id,
  label,
  placeholder,
  type,
  maxLength,
  onChange,
  allowSpecialCharacters = true,
  mandatory = false,
}) => {
  const autoCompleteValue = type === 'password' ? 'current-password' : 'on';

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;

    let truncatedValue = value;

    if (!allowSpecialCharacters) {
      truncatedValue = truncatedValue.replace(/[^A-Za-z]/g, '');
    }

    if (maxLength) {
      truncatedValue = truncatedValue.slice(0, maxLength);
    }

    setInputValue(truncatedValue);

    if (onChange) {
      onChange(truncatedValue);
    }
  };

  return (
    <div className="formGroup">
      {label && (
        <label className="formGroup__label" htmlFor={id}>
          {label}
          {mandatory && <span className="mandatory">*</span>}:
        </label>
      )}
      <input
        className="formGroup__input"
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autoCompleteValue}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInput;