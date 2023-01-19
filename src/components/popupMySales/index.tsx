import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import axiosBaseUrl from '../../utils/configAxios';
import * as styled from './styles';

export default function PopupMySale({
  setShowPopup,
  showPopup,
}: {
  setShowPopup: any;
  showPopup: boolean;
}) {
  const refWrapper = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);
  const [mySales, setMySales] = React.useState([]);

  const handleRefreshToken = useCallback(async () => {
    try {
      const response = await axiosBaseUrl.post('/refresh');

      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.response.status);
    }
  }, []);

  const handleGetMySales = useCallback(async () => {
    try {
      const response = await axiosBaseUrl.get('/cars/my');

      setMySales(response.data.Cars);
    } catch (error: any | { response: { status: number } }) {
      console.log(error);
      if (error.response.status === 401) {
        await handleRefreshToken();
        await handleGetMySales();
      }
    }
  }, [handleRefreshToken]);

  useEffect(() => {
    handleGetMySales();
  }, [handleGetMySales]);

  const handleAnimation = useCallback(() => {
    const wrapper = refWrapper.current;
    const content = refContent.current;

    if (wrapper && content) {
      if (showPopup) {
        wrapper.style.visibility = 'visible';
        content.style.visibility = 'visible';
        wrapper.style.opacity = '1';
        content.style.opacity = '1';
        content.style.top = '50%';
      }
      if (!showPopup) {
        wrapper.style.opacity = '0';
        content.style.opacity = '0';
        content.style.top = '-50%';
        setTimeout(() => {
          wrapper.style.visibility = 'hidden';
          content.style.visibility = 'hidden';
        }, 500);
      }
    }
  }, [showPopup]);

  const handleDeleteSale = useCallback(
    async (id: number) => {
      try {
        const response = await axiosBaseUrl.delete(`/car/${id}`);
        console.log(response);
        handleGetMySales();
      } catch (error) {
        if (error.response.status === 401) {
          await handleRefreshToken();
          await handleGetMySales();
        }
      }
    },
    [handleGetMySales, handleRefreshToken],
  );

  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);
  return (
    <styled.Wrapper ref={refWrapper}>
      <styled.Close onClick={() => setShowPopup(false)}>
        <AiOutlineClose />
      </styled.Close>
      <styled.Content ref={refContent}>
        <styled.Title>Minhas vendas</styled.Title>
        <styled.ListCardsSales>
          {mySales.length !== 0 ? (
            mySales.map((sale: any) => (
              <styled.CardSale key={sale.id}>
                <styled.CardSaleImage src={sale.image} />
                <styled.CardSaleTitle>{sale.model}</styled.CardSaleTitle>
                <styled.CardSalePrice>{`R$ ${sale.price}`}</styled.CardSalePrice>
                <styled.CardSaleButtonDelete
                  onClick={() => handleDeleteSale(sale.id)}
                >
                  <BsTrash />
                </styled.CardSaleButtonDelete>
              </styled.CardSale>
            ))
          ) : (
            <styled.Title>Você não tem vendas</styled.Title>
          )}
        </styled.ListCardsSales>
      </styled.Content>
    </styled.Wrapper>
  );
}
