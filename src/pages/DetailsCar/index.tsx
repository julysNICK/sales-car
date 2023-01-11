import * as styled from './styles';
import { Header } from '../../components/Header';
import { useState } from 'react';

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
            <styled.NextButton onClick={nextImage}></styled.NextButton>
            <styled.PreviousButton onClick={prevImage}></styled.PreviousButton>
          </styled.ContainerSlider>
        </styled.Container>
      </>
    </>
  );
}
