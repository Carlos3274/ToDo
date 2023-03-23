import { forwardRef } from 'react';
import { FormControl } from 'react-bootstrap';

import { TextInputProps } from '../../types';

import { withBaseInput } from '../hocs/with-base-input';
import * as S from './text-input.styles';

const TextInput: React.FC<TextInputProps> = forwardRef(
  ({ label, error, leftIcon: LeftIcon, className, ...rest }, ref) => {
    const isInvalid = error !== undefined;

    return (
      <S.InputWrapper
        isInvalid={isInvalid}
        isDisabled={rest.disabled === true}
        hasLeftIcon={LeftIcon !== undefined}
        className={className}
      >
        {LeftIcon && <LeftIcon />}
        <FormControl
          ref={ref}
          isInvalid={isInvalid}
          className={`form-control ${isInvalid && 'is-invalid'}`}
          autoComplete="off"
          {...rest}
        />
      </S.InputWrapper>
    );
  }
);

export default withBaseInput(TextInput);
