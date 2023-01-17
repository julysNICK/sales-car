import * as styled from './styles';

export default function ContainerInputs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <styled.ContainerDoubleInputs>{children}</styled.ContainerDoubleInputs>
  );
}
