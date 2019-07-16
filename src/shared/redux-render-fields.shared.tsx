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
      warning,
      touched 
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
          touched &&
            ((error && <div className="text-danger">{ error }</div>) ||
            (warning && <div>{ warning }</div>))
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
      warning,
      touched 
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
          touched &&
            ((error && <div className="text-danger">{ error }</div>) ||
            (warning && <div>{ warning }</div>))
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
      warning,
      touched
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
        touched &&
          ((error && <div className="text-danger">{ error }</div>) ||
          (warning && <div>{ warning }</div>))
      }
    </div>
  );
};