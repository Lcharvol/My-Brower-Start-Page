import React from 'react';
import {
  object,
} from 'prop-types';

import {
  ThumbnailContainer,
} from './styles';

const Thumbnail = ({
  thumbnail,
}) => (
  <ThumbnailContainer image={thumbnail.image}>
  </ThumbnailContainer>
);

Thumbnail.prototype = {
  thumbnail: object.isRequired,
}

export default Thumbnail;