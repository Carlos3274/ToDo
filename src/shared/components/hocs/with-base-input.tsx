import { ComponentType } from 'react';
import { Form } from 'react-bootstrap';
import { WithBaseInputProps } from 'src/shared/types';
import Label from '../label/label';

export const withBaseInput = <T,>(Component: ComponentType<T>) => {
  return (props: T & WithBaseInputProps) => {
    return (
      <>
        {props.label && (
          <Label isRequired={props.isRequired}>{props.label}</Label>
        )}
        <Component {...props} />
        {props.error !== undefined && (
          <Form.Text className="text-danger">{props.error}</Form.Text>
        )}
      </>
    );
  };
};
