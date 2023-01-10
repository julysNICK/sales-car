import * as styled from './styles';

export default function CounterPages() {
  return (
    <styled.NumberPage>
      <styled.ButtonPrev>
        <styled.ArrowLeft />
      </styled.ButtonPrev>

      <styled.Page>1</styled.Page>
      <styled.Page>2</styled.Page>
      <styled.Page>3</styled.Page>
      <styled.Page>4</styled.Page>
      <styled.Page>5</styled.Page>

      <styled.ButtonNext>
        <styled.ArrowRight />
      </styled.ButtonNext>
    </styled.NumberPage>
  );
}
