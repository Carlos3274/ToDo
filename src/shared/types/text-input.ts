import { ComponentType, InputHTMLAttributes } from 'react';
import { FormControlProps } from 'react-bootstrap';
import { WithBaseInputProps } from './with-base-input';

export type TextInputProps = FormControlProps &
  InputHTMLAttributes<HTMLInputElement> &
  WithBaseInputProps & {
    leftIcon?: ComponentType;
  };
