import React from 'react';

import Thumbnail from '../../components/Thumbnail';
import {
  ThumbnailsContainer,
} from './styles';
import { elems } from './elems';

const Thumbnails = () => (
  <ThumbnailsContainer>
    {elems.map(elem => <Thumbnail key={elem.id} thumbnail={elem} />)}
  </ThumbnailsContainer>
);

export default Thumbnails;