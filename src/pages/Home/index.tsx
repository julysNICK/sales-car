import React from 'react';
import BelowMenu from '../../components/BelowMenu';

import { Header } from '../../components/Header';
import * as Styled from './styles';
export const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <BelowMenu />
    </Styled.Container>
  );
};
