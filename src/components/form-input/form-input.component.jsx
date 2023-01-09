import React from 'react';
import './form-input.style.scss'

const FormInput = ({labelName, ...othersProps}) => {
  return (
    <div className={'group'}>
      <input className={'form-input'} {...othersProps}/>
      {labelName && (
        <label
          className={`${othersProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {labelName}
        </label>
      )}
    </div>
  );
};

export default FormInput;