import React, { Component } from 'react';

import OnMouseMove from 'lib/components/OnMouseMove';
import { fade } from 'style/animations';
import colors from 'style/colors';
import { stretchFull } from 'style/mixins';
import styled from 'styled-components';

const ImgBackground = styled.div.attrs({
  style: props => ({
    transform: `translate3d(${props.dX}, ${props.dY}, 0) scale(1.1)`,
    backgroundImage: `url(${props.img})`
  })
})`
  ${stretchFull};
  background-size: cover;
  background-position: 75% center;
  z-index: -1;
  position: fixed;
  &:after {
    content: '';
    z-index: 1;
    ${stretchFull};
    background-color: ${colors.black};
    animation: ${fade({ from: 1, to: 0.25 })} 1s forwards 1.2s;
  }
`;

const MovingImgBackground = props => (
  <OnMouseMove
    render={({ x, y }) => {
      const xd = x / window.innerWidth;
      const yd = y / window.innerHeight;
      const [xDist, yDist] = [xd, yd].map(delta => 2.5 - delta * 5);
      return (
        <ImgBackground dX={`${xDist}%`} dY={`${yDist}%`} img={props.img} />
      );
    }}
  />
);

export default MovingImgBackground;
