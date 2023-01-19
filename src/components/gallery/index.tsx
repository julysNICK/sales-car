import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import axiosBaseUrl from '../../utils/configAxios';
import Card from '../Card';
import CounterPages from '../CounterPage';
import * as styled from './styles';

interface responseCars {
  CarsInfo: {
    Car: {
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
    };
    User: {
      email: string;
      firstName: string;
      id: string;
      lastName: string;
    };
  };
}

interface responseCarsMake {
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

export default function GalleryCards({
  selectedBrand,
}: {
  selectedBrand: string;
}) {
  const [cars, setCars] = useState<responseCars[]>([]);
  const [carsByMake, setCarsByMake] = useState<responseCarsMake[]>([]);
  const [loading, setLoading] = useState(false);
  const getCar = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/api/v1/cars');

      setCars(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getCarsByMake = useCallback(async (make: string) => {
    setLoading(true);
    try {
      const response = await axiosBaseUrl.get(
        `/car/make/${make.toLowerCase()}`,
      );

      setCarsByMake(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    if (selectedBrand === 'Todos') {
      getCar();
    } else {
      getCarsByMake(selectedBrand);
    }

    return () => {
      setCars([]);
      setCarsByMake([]);
    };
  }, [getCarsByMake, selectedBrand]);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <styled.GalleryCard>
      {carsByMake.length > 0 && selectedBrand !== 'Todos'
        ? carsByMake.map((car) => (
            <Card
              key={car?.id}
              model={car?.model}
              id={car?.id}
              image={car?.image}
              description={car?.descriptionCar}
              price={car?.price}
            />
          ))
        : cars.map((car) => (
            <Card
              key={car?.CarsInfo?.Car.id}
              model={car?.CarsInfo?.Car.model}
              id={car?.CarsInfo?.Car.id}
              image={car?.CarsInfo?.Car.image}
              description={car?.CarsInfo?.Car.descriptionCar}
              price={car?.CarsInfo?.Car.price}
            />
          ))}
    </styled.GalleryCard>
  );
}
