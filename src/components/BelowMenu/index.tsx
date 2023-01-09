import * as Styled from './styles';
export default function BelowMenu() {
  return (
    <Styled.SectionBelowMenu className="home">
      <Styled.HomeText>
        <Styled.HomeTextTitle>
          Encontre seu carro e seja <br /> FELIZ!
        </Styled.HomeTextTitle>
        <Styled.HomeTextDescription>
          O Site que garante a compra de seu semi-novo com a melhor qualidade e
          preço do mercado.
        </Styled.HomeTextDescription>

        <Styled.HomeTextLink>Ver ofertas</Styled.HomeTextLink>
      </Styled.HomeText>
    </Styled.SectionBelowMenu>
  );
}
