import axios from 'axios';
import { useEffect, useState } from 'react';
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

export default function GalleryCards() {
  const [cars, setCars] = useState<responseCars[]>([]);

  const getCar = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/cars');

      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCar();

    return () => {
      setCars([]);
    };
  }, []);
  return (
    <styled.GalleryCard>
      {cars.map((car) => (
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
