import styled, { css } from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export const CardContainer = styled.div`
  width: 20%;
  margin: 15px;
  box-sizing: border-box;
  float: left;
  text-align: center;
  /* border: 1px solid #e6e6e6; */
  border-radius: 25px;
  cursor: pointer;
  padding-top: 10px;
  /* box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); */
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: #f2f2f2;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translate(0, -8px);
  }
`;

export const ImageCard = styled.img`
  object-fit: cover;
  width: 100%;

  text-align: center;
  margin: 0 auto;
  display: block;
`;

export const TitleCard = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  padding-top: 10px;
`;

export const DescriptionCard = styled.p`
  text-align: center;
  color: #b2bec3;
  padding-top: 0 8px;
`;

export const PriceCard = styled.h6`
  font-size: 1.5rem;
  text-align: center;
  color: #222f3e;
  margin: 0;
`;

export const ButtonCard = styled.button`
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  background: #2183a2;
`;

export const StarsUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
`;

export const StarsLi = styled.li`
  padding-top: 5px;
`;

export const AifillStar = styled(AiFillStar)`
  font-size: 26px;
  transition: 0.4s;
  margin: 3px;
  color: #ff9f43;

  &:hover {
    transform: scale(1.2);
    transition: 0.6s;
  }
`;

export const AioutlineStar = styled(AiOutlineStar)`
  font-size: 26px;
  transition: 0.4s;
  margin: 3px;
  &:hover {
    transform: scale(1.2);
    transition: 0.6s;
  }
`;
