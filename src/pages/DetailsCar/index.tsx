import * as styled from './styles';
import { Header } from '../../components/Header';
import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function DetailsCar() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      id: 1,
      url: '/carUsage1.png',
    },
    {
      id: 2,
      url: '/Logosite.png',
    },
    {
      id: 3,
      url: '/carUsage1.png',
    },
    {
      id: 3,
      url: '/Logosite.png',
    },
  ];

  const nextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };
  return (
    <>
      <Header />
      <>
        <styled.Container>
          <styled.ContainerSlider>
            <styled.ImageSlider src={images[currentImage].url} />

            <styled.AmountOfImages>
              {currentImage + 1} / {images.length}
            </styled.AmountOfImages>
            <styled.NextButton onClick={nextImage}>
              <AiOutlineArrowRight size={30} color="#fff" />
            </styled.NextButton>
            <styled.PreviousButton onClick={prevImage}>
              <AiOutlineArrowLeft size={30} color="#fff" />
            </styled.PreviousButton>
          </styled.ContainerSlider>

          <styled.ContainerInfoCar>
            <styled.TitleCar>Ficha técnica</styled.TitleCar>
            <styled.BoxInfo>
              <styled.InfoTech>Marca:</styled.InfoTech>
              <styled.InfoCar>Toyota</styled.InfoCar>
            </styled.BoxInfo>
            <styled.BoxInfo>
              <styled.InfoTech>Modelo:</styled.InfoTech>
              <styled.InfoCar>Corolla XEi 1.8 16V Flex 4p Aut.</styled.InfoCar>
            </styled.BoxInfo>
            <styled.BoxInfo>
              <styled.InfoTech>Ano de compra:</styled.InfoTech>
              <styled.InfoCar>2019</styled.InfoCar>
            </styled.BoxInfo>

            <styled.BoxInfo>
              <styled.InfoTech>Motivo da venda:</styled.InfoTech>
              <styled.InfoCar>
                Estou vendendo pois preciso de um carro maior
              </styled.InfoCar>
            </styled.BoxInfo>

            <styled.BoxInfo>
              <styled.InfoTech>Proprietario:</styled.InfoTech>
              <styled.InfoCar>João da Silva</styled.InfoCar>
            </styled.BoxInfo>

            <styled.BoxInfo>
              <styled.InfoTech>Valor:</styled.InfoTech>
              <styled.InfoCar>
                <strong>R$ 50.000,00 à vista</strong>
              </styled.InfoCar>
            </styled.BoxInfo>
          </styled.ContainerInfoCar>

          <styled.BoxButtons>
            <styled.ButtonGetInTouch>Entrar em contato</styled.ButtonGetInTouch>
            <styled.ButtonMakeOffer>Fazer oferta</styled.ButtonMakeOffer>
          </styled.BoxButtons>
        </styled.Container>
      </>
    </>
  );
}
