import { useCallback, useEffect, useReducer, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
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
      name: '',
      email: '',
      phone: '',
      brand: '',
      model: '',
      year: '',
      version: '',
      km: '',
      price: '',
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
          <styled.ContainerDoubleInputs>
            <styled.Input
              placeholder="Nome"
              value={fields.name}
              onChange={(e) =>
                updateFields({
                  name: e.target.value,
                })
              }
            />

            <styled.Input
              placeholder="Email"
              value={fields.email}
              onChange={(e) =>
                updateFields({
                  email: e.target.value,
                })
              }
            />
          </styled.ContainerDoubleInputs>
          <styled.ContainerDoubleInputs>
            <styled.Input
              placeholder="Telefone"
              value={fields.phone}
              onChange={(e) =>
                updateFields({
                  phone: e.target.value,
                })
              }
            />
            <styled.Input
              placeholder="Marca"
              value={fields.brand}
              onChange={(e) =>
                updateFields({
                  brand: e.target.value,
                })
              }
            />

            <styled.Input
              placeholder="Modelo"
              value={fields.model}
              onChange={(e) =>
                updateFields({
                  model: e.target.value,
                })
              }
            />
          </styled.ContainerDoubleInputs>
          <styled.ContainerDoubleInputs>
            <styled.Input
              placeholder="Ano"
              value={fields.year}
              onChange={(e) =>
                updateFields({
                  year: e.target.value,
                })
              }
            />
            <styled.Input
              placeholder="Quilometragem"
              value={fields.km}
              onChange={(e) =>
                updateFields({
                  km: e.target.value,
                })
              }
            />
          </styled.ContainerDoubleInputs>
          <styled.Input
            placeholder="Valor"
            value={fields.price}
            onChange={(e) =>
              updateFields({
                price: e.target.value,
              })
            }
          />
          <styled.Input placeholder="Descrição" />
          <styled.Input type={'file'} placeholder="Imagem" />
          <styled.Button type="submit">Publicar</styled.Button>
        </styled.FormSale>
      </styled.Content>
    </styled.Wrapper>
  );
}
