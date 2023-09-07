import React, { useState } from 'react';

const ComboBox = ({ id, label, options, placeholder, mandatory }) => {
  const [selectedOption, setSelectedOption] = useState(undefined);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="formGroup">
      {label && (
        <label className="formGroup__label" htmlFor={id}>
          {label}
          {mandatory && <span className="mandatory">*</span>} :
        </label>
      )}
      <select
        className="formGroup__select"
        id={id}
        value={selectedOption || ''}
        onChange={handleSelectChange}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;