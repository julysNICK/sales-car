import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: all 0.9s ease-in-out;
  visibility: hidden;
  opacity: 0;
`;

export const Content = styled.div`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4d5061;
  padding: 20px;
  border-radius: 5px;
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.9s ease-in-out;
  visibility: hidden;
  opacity: 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 50px;
  color: #e8efff;
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #333;
    color: #fff;
  }
`;
export const ListCardsSales = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 20px;
`;

export const CardSale = styled.div`
  width: 100%;

  border: 1px solid 30323D;
  border-radius: 5px;
  padding: 15px 10px;
  margin-bottom: 10px;
  background: #30323d;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const CardSaleTitle = styled.p`
  font-size: 1.2rem;
  /* margin-bottom: 50px; */
`;
export const CardSalePrice = styled.p`
  font-size: 1.2rem;
  /* margin-bottom: 50px; */
`;

export const CardSaleButtonDelete = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #30323d;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CardSaleImage = styled.img`
  width: 100px;

  object-fit: cover;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;
