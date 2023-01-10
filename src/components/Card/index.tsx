import React from 'react';

import * as Styled from './styles';

export default function Card() {
  return (
    <Styled.CardContainer>
      <Styled.ImageCard src="public/carUsage1.png" />
      <Styled.TitleCard>Carro usado civic 2020</Styled.TitleCard>
      <Styled.DescriptionCard>Carro muito conservado </Styled.DescriptionCard>
      <Styled.PriceCard>R$ 1.000,00</Styled.PriceCard>

      <Styled.StarsUl>
        <Styled.StarsLi>
          <Styled.AifillStar />
        </Styled.StarsLi>
        <Styled.StarsLi>
          <Styled.AioutlineStar />
        </Styled.StarsLi>
      </Styled.StarsUl>
      <Styled.ButtonCard>Mais detalhes</Styled.ButtonCard>
    </Styled.CardContainer>
  );
}
