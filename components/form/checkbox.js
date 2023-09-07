import React from 'react';

const Checkbox = ({ id, label, checked, onChange, mandatory }) => {
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    onChange(isChecked);
  };

  return (
    <div className="formGroup">
      {label && (
        <label className="formGroup__label" htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={handleCheckboxChange}
          />
          {label}
          {mandatory && <span className="mandatory">*</span>}
        </label>
      )}
    </div>
  );
};

export default Checkbox;