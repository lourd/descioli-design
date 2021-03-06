import React from 'react';
import styled from '@emotion/styled';

import sizes from 'style/sizes';
import { fadeDownInCss } from 'style/snippets';
import { fadeIn } from 'style/animations';
import MovingImgBackground from 'components/MovingImgBackground';
import Bylines from './Bylines';

const Panel = styled.div`
  height: var(--window-height);
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  color: white;
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div`
  text-align: left;
  font-size: 0.8em;
  padding: 10% 5% 0px 5%;
  width: 100%;
  @media (min-width: ${sizes.medium}) {
    font-size: 1em;
    padding: 50px 0px 20px 5%;
  }
`;

const Name = styled.h1<{ delay: number }>`
  ${fadeDownInCss};
  font-size: 4.5em;
  font-weight: lighter;
  letter-spacing: -1px;
  animation-delay: 0s;
  margin-bottom: 0;
  animation-delay: ${props => props.delay}ms;
`;

const CTA = styled.div<{ delay: number }>`
  position: absolute;
  top: 50%;
  left: 5%;
  font-size: 1.5em;
  opacity: 0;
  animation: ${fadeIn} 1.2s forwards;
  animation-delay: ${props => props.delay}ms;
  @media (max-width: ${sizes.smallMax}) {
    max-width: 70vw;
  }
  h4 {
    font-weight: 300;
    margin-bottom: 5px;
    font-size: 1.3em;
  }
  h3 {
    font-size: 2em;
    transition: transform 250ms;
  }
  a {
    color: white;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

interface Props {
  bylines: string[];
  img: string;
}

const TopPanel = (props: Props) => (
  <Panel>
    <MovingImgBackground img={props.img} delay={1500} />
    <TextContainer>
      <Name delay={200}>Louis R. DeScioli</Name>
      <Bylines bylines={props.bylines} delay={2200} interval={3000} />
      <CTA delay={3000}>
        <h4>Play with my latest creation</h4>
        <h3>
          <a
            href="https://itunes.apple.com/us/app/out-here-archery/id1309822636?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Out Here Archery
          </a>
        </h3>
      </CTA>
    </TextContainer>
  </Panel>
);

export default TopPanel;
