import axios from 'axios';
import { useCallback, useEffect, useReducer, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axiosBaseUrl from '../../utils/configAxios';
import ContainerInputs from '../ContainerInputs';
import MyInput from '../Inputs';
import * as styled from './styles';

export default function PopupSale({
  setShowPopup,
  showPopup,
}: {
  setShowPopup: any;
  showPopup: boolean;
}) {
  const [fields, updateFields] = useReducer(
    (state, newState) => ({ ...state, ...newState }),

    {
      phone: '',
      brand: '',
      model: '',
      year: '',
      version: '',
      km: '',
      price: '',
      url: '',
      description: '',
    },

    (initialState) => initialState,
  );

  const refWrapper = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    handleAnimation();
  }, [handleAnimation]);

  const verifyFields = useCallback(() => {
    if (
      fields.name !== '' ||
      fields.email !== '' ||
      fields.phone !== '' ||
      fields.brand !== '' ||
      fields.model !== '' ||
      fields.year !== '' ||
      fields.version !== '' ||
      fields.km !== '' ||
      fields.price !== '' ||
      fields.url !== '' ||
      fields.description !== ''
    ) {
      return true;
    }
    return false;
  }, [fields]);

  const handleRefreshToken = useCallback(async () => {
    try {
      const response = await axiosBaseUrl.post('/refresh');
      console.log(response);

      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error.response.status);
    }
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (verifyFields()) {
        try {
          const response = await axiosBaseUrl.post('/car', {
            make: fields?.brand?.toLowerCase(),
            model: fields.model,
            year: fields.year,
            isSold: false,
            color: 'red',
            price: Number(fields.price),
            reasonToSell: 'comprar outro pls',
            image: fields.url,
          });

          updateFields({
            name: '',
            email: '',
            phone: '',
            brand: '',
            model: '',
            year: '',
            version: '',
            km: '',
            price: '',
            url: '',
            description: '',
          });
          alert('Cadastro realizado com sucesso!');
          setShowPopup(false);
        } catch (error) {
          console.log(error);
          if (error.response.status === 401) {
            await handleRefreshToken();
            await handleSubmit(e);
          }
        }
        return;
      }

      alert('Preencha todos os campos!');
      return;
    },
    [verifyFields, fields, setShowPopup, handleRefreshToken],
  );

  return (
    <styled.Wrapper ref={refWrapper}>
      <styled.Close onClick={() => setShowPopup(false)}>
        <AiOutlineClose />
      </styled.Close>
      <styled.Content ref={refContent}>
        <styled.Title>
          Vender seu carro é muito mais fácil do que você imagina!
        </styled.Title>

        <styled.FormSale>
          <ContainerInputs>
            <MyInput
              placeholder="Telefone"
              value={fields.phone}
              onChange={(e) =>
                updateFields({
                  phone: e.target.value,
                })
              }
            />
            <MyInput
              placeholder="Marca"
              value={fields.brand}
              onChange={(e) =>
                updateFields({
                  brand: e.target.value,
                })
              }
            />

            <MyInput
              placeholder="Modelo"
              value={fields.model}
              onChange={(e) =>
                updateFields({
                  model: e.target.value,
                })
              }
            />
          </ContainerInputs>
          <ContainerInputs>
            <MyInput
              placeholder="Ano"
              value={fields.year}
              onChange={(e) =>
                updateFields({
                  year: e.target.value,
                })
              }
            />
            <MyInput
              placeholder="Quilometragem"
              value={fields.km}
              onChange={(e) =>
                updateFields({
                  km: e.target.value,
                })
              }
            />
          </ContainerInputs>
          <MyInput
            placeholder="Valor"
            value={fields.price}
            onChange={(e) =>
              updateFields({
                price: e.target.value,
              })
            }
          />
          <MyInput
            placeholder="Descrição"
            value={fields.description}
            onChange={(e) =>
              updateFields({
                description: e.target.value,
              })
            }
          />
          <MyInput
            placeholder="Imagem"
            value={fields.url}
            onChange={(e) =>
              updateFields({
                url: e.target.value,
              })
            }
          />
          <styled.Button type="submit" onClick={(e) => handleSubmit(e)}>
            Publicar
          </styled.Button>
        </styled.FormSale>
      </styled.Content>
    </styled.Wrapper>
  );
}
