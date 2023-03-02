import React from 'react';
import {FormInputLabel, Input,Group} from './form-input.style'

const FormInput = ({labelName, ...othersProps}) => {
  return (
    <Group>
      <Input {...othersProps}/>
      {labelName && (
        <FormInputLabel
          shrink={othersProps.value.length}
        >
          {labelName}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;