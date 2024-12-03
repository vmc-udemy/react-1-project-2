import { Group, Input, Label } from './form-input.styles';

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <Label>{label}</Label>}
    </Group>
  );
}

export default FormInput;
