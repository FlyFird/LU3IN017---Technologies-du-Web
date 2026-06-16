import React from 'react';

const TextAreaField = ({ id, label, value, onChange }) => {
  const labelStyle = {
    color: '#374151',
    fontSize: '0.875rem',
    marginBottom: '0.25rem',
    display: 'block',
    height : '10px'
  };

  const textareaStyle = {
    width: '100%',
    Height: '10px',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '1px',
    border: '1px solid #d1d5db',
    borderRadius: '12px',
    fontSize: '15px',
    resize: 'vertical',
    outline: 'none',
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <textarea
        id={id}
        rows="2"
        placeholder={`Enter ${label.toLowerCase()}`}
        value={value}
        onChange={onChange}
        style={textareaStyle}
        required
      />
    </div>
  );
};

export default TextAreaField;
