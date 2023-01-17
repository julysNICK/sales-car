import * as styled from './styles';

export default function MyInput({
  placeholder,
  value,
  onChange,
  type = 'text',
}: {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <styled.Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e)}
    />
  );
}
