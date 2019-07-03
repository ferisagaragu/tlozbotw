import React from 'react';

export const renderTextField = (metaData: any) => {
  const {
    input,
    label,
    type,
    className,
    onKeyUp,
    meta: { 
      error, 
      warning 
    }
  } = metaData;

  return (
    <div className="mb-3">
      <label>
        <b>
          { label }
        </b>
      </label>
      <div>
        <input 
          className={ className }
          { ...input } 
          placeholder={ label } 
          type={ type }
          onKeyUp={ onKeyUp } 
        />
        {
          ((error && <div className="text-danger">{error}</div>) ||
          (warning && <div>{warning}</div>))
        }
      </div>
    </div>
  );
};

export const renderTextArea = (metaData: any) => {
  const {
    input,
    label,
    className,
    meta: { 
      error, 
      warning 
    }
  } = metaData;

  return (
    <div className="mb-3">
      <label>
        <b>
          { label }
        </b>
      </label>
      <div>
        <textarea 
          className={ className }
          {...input} 
          placeholder={ label } 
        />
        {
          ((error && <div className="text-danger">{error}</div>) ||
          (warning && <div>{warning}</div>))
        }
      </div>
    </div>
  );
};

export const renderCheckBox = (metaData: any) => {
  const {
    input,
    label,
    type,
    className,
    meta: { 
      error, 
      warning 
    }
  } = metaData;

  return (
    <div>
      <label>
        <input 
          className={ className }
          {...input}
          type={type} 
        /> 
        &nbsp;&nbsp;&nbsp;&nbsp;{ label }
      </label>
      <br />
      {
        ((error && <div className="text-danger">{error}</div>) ||
        (warning && <div>{warning}</div>))
      }
    </div>
  );
};