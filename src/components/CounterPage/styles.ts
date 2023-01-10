import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled, { css } from 'styled-components';
export const NumberPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ButtonNext = styled(Button)`
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #f5f5f5;
    `}
`;

export const ButtonPrev = styled(Button)`
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #f5f5f5;
    `}
`;

export const ArrowLeft = styled(AiOutlineArrowLeft)`
  margin-right: 5px;
`;

export const ArrowRight = styled(AiOutlineArrowRight)`
  margin-left: 5px;
`;
