import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  display:flex;
  width:200px;
  height:200px;
  background-color:white;
  border-radius:3px;
  background-image:${({ image}) => `url(${image})`};
  background-size: 115%;
  background-position: center;
  background-repeat: no-repeat;
`;