import { forwardRef } from 'react';
import { TextInputProps } from 'src/shared/types';

import * as S from './text-input.styles';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, isRequired, error, ...rest }, ref) => {
    return (
      <S.InputWrapper error={error} isRequired={isRequired}>
        <label>{label}</label>
        <input {...rest} ref={ref} />
        {error !== undefined && <span>{error}</span>}
      </S.InputWrapper>
    );
  }
);
