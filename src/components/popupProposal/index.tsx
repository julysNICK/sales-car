import { useCallback, useEffect, useReducer, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ContainerInputs from '../ContainerInputs';
import MyInput from '../Inputs';
import * as styled from './styles';
export default function PopupProposal({
  setShowPopup,
  showPopup,
}: {
  setShowPopup: any;
  showPopup: boolean;
}) {
  const [fields, updateFields] = useReducer(
    (state, newState) => ({ ...state, ...newState }),

    {
      name:
        `${localStorage.getItem('firstNameUser')} ${localStorage.getItem(
          'lastNameUser',
        )}` || '',
      email: `${localStorage.getItem('emailUser')}` || '',
      phone: '',
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
        <styled.Title>Faça uma proposta para o veículo</styled.Title>

        <styled.FormSale>
          <ContainerInputs>
            <MyInput
              placeholder="Nome"
              value={fields.name}
              onChange={(e) =>
                updateFields({
                  name: e.target.value,
                })
              }
            />

            <MyInput
              placeholder="Email"
              value={fields.email}
              onChange={(e) =>
                updateFields({
                  email: e.target.value,
                })
              }
            />
          </ContainerInputs>
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

          <styled.Button
            type="button"
            onClick={() => {
              if (fields.name && fields.email && fields.phone && fields.price) {
                console.log(fields);
                alert('Proposta enviada com sucesso!');
                setShowPopup(false);
              }

              if (!fields.name) {
                alert('Preencha o campo nome!');
              }

              if (!fields.email) {
                alert('Preencha o campo email!');
              }

              if (!fields.phone) {
                alert('Preencha o campo telefone!');
              }

              if (!fields.price) {
                alert('Preencha o campo valor!');
              }

              if (!fields.name && !fields.email && !fields.phone) {
                alert('Preencha os campos nome, email e telefone!');
              }
            }}
          >
            Enviar proposta
          </styled.Button>
        </styled.FormSale>
      </styled.Content>
    </styled.Wrapper>
  );
}
