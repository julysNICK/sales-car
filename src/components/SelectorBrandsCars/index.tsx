import * as Styled from './styles';

export default function SelectorBrandsCars() {
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
    <Styled.ContainerBrands>
      <Styled.HorinzontalScroll>
        {/* <Styled.ButtonLeft />
        <Styled.ButtonRight /> */}
        <Styled.ContainerBrandsCars>
          {brandsCars.map((brand) => (
            <Styled.BrandCar key={brand}>
              <Styled.NameBrand>{brand}</Styled.NameBrand>
            </Styled.BrandCar>
          ))}
        </Styled.ContainerBrandsCars>
      </Styled.HorinzontalScroll>
    </Styled.ContainerBrands>
  );
}
