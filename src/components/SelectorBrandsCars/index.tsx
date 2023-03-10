import axios from 'axios';
import { useEffect, useState } from 'react';
import CounterPages from '../CounterPage';
import GalleryCards from '../gallery';
import * as Styled from './styles';

export default function SelectorBrandsCars() {
  const [selectedBrand, setSelectedBrand] = useState('Todos');
  const brandsCars = [
    'Todos',
    'Mercedes',
    'BMW',
    'Audi',
    'Ferrari',
    'Lamborghini',
    'Chevrolet',
    'Ford',
    'Volkswagen',
    'Toyota',
    'Honda',
    'Hyundai',
    'Nissan',
    'Renault',
    'Peugeot',
    'Citroen',
    'Fiat',
    'Volvo',
    'Mitsubishi',
  ];

  return (
    <>
      <Styled.ContainerBrands>
        <Styled.HorinzontalScroll>
          <Styled.ContainerBrandsCars>
            {brandsCars.map((brand) => (
              <Styled.BrandCar
                key={brand}
                onClick={() => setSelectedBrand(brand)}
              >
                <Styled.NameBrand>{brand}</Styled.NameBrand>
              </Styled.BrandCar>
            ))}
          </Styled.ContainerBrandsCars>
        </Styled.HorinzontalScroll>
      </Styled.ContainerBrands>
      <GalleryCards selectedBrand={selectedBrand} />
      <CounterPages />
    </>
  );
}
