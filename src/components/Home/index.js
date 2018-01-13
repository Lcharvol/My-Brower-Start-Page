import React from 'react';

import Thumbnails from '../../containers/Thumbnails';
import Header from '../../containers/Header';
import {
  HomeContainer,
} from './styles';

const Home = () => (
  <HomeContainer>
    <Header />
    <Thumbnails />
  </HomeContainer>
);

export default Home;