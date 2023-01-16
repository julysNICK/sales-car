import React from 'react';

import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  id: string;
  image: string;
  model: string;
  description: string;
  price: number;
}

export default function Card({
  id,
  image,
  model,
  description,
  price,
}: CardProps) {
  const navigate = useNavigate();
  return (
    <Styled.CardContainer>
      <Styled.ImageCard src={image} />
      <Styled.TitleCard>{model}</Styled.TitleCard>
      <Styled.DescriptionCard>{description}</Styled.DescriptionCard>
      <Styled.PriceCard>{`R$ ${String(price).replace(
        '.',
        ',',
      )},00`}</Styled.PriceCard>

      <Styled.StarsUl>
        <Styled.StarsLi>
          <Styled.AifillStar />
        </Styled.StarsLi>
        <Styled.StarsLi>
          <Styled.AioutlineStar />
        </Styled.StarsLi>
      </Styled.StarsUl>
      <Styled.ButtonCard
        onClick={() => {
          navigate(`/detailsCar/${id}`);
        }}
      >
        Mais detalhes
      </Styled.ButtonCard>
    </Styled.CardContainer>
  );
}
