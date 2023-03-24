export type TextInputProps = {
  label: string;
  isRequired?: boolean;
  error?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
