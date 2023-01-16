import * as styled from './styles';
import { Header } from '../../components/Header';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useParams } from 'react-router-dom';

import axios from 'axios';
interface responseCar {
  id: string;
  descriptionCar: string;
  color: string;
  image: string;
  isSold: boolean;
  make: string;
  model: string;
  price: number;
  reasonToSell: string;
  user_id: string;
  year: string;
}

export default function DetailsCar() {
  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<responseCar | null>(null);

  const getCar = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/car/${id}`,
      );

      setCar(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getCar();
    return () => {
      setCar(null);
    };
  }, [getCar]);

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
        {car !== null && (
          <>
            <styled.Container>
              <styled.ContainerSlider>
                <styled.ImageSlider src={car?.image} />

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
                  <styled.InfoCar>{car?.make}</styled.InfoCar>
                </styled.BoxInfo>
                <styled.BoxInfo>
                  <styled.InfoTech>Modelo:</styled.InfoTech>
                  <styled.InfoCar>{car?.model}</styled.InfoCar>
                </styled.BoxInfo>
                <styled.BoxInfo>
                  <styled.InfoTech>Ano de compra:</styled.InfoTech>
                  <styled.InfoCar>{car?.year}</styled.InfoCar>
                </styled.BoxInfo>

                <styled.BoxInfo>
                  <styled.InfoTech>Motivo da venda:</styled.InfoTech>
                  <styled.InfoCar>{car?.reasonToSell}</styled.InfoCar>
                </styled.BoxInfo>

                <styled.BoxInfo>
                  <styled.InfoTech>Proprietario:</styled.InfoTech>
                  <styled.InfoCar>João da Silva</styled.InfoCar>
                </styled.BoxInfo>

                <styled.BoxInfo>
                  <styled.InfoTech>Valor:</styled.InfoTech>
                  <styled.InfoCar>
                    <strong>{`R$ ${car?.price} à vista`}</strong>
                  </styled.InfoCar>
                </styled.BoxInfo>
              </styled.ContainerInfoCar>

              <styled.BoxButtons>
                <styled.ButtonGetInTouch>
                  Entrar em contato
                </styled.ButtonGetInTouch>
                <styled.ButtonMakeOffer>Fazer oferta</styled.ButtonMakeOffer>
              </styled.BoxButtons>
            </styled.Container>
          </>
        )}
      </>
    </>
  );
}
