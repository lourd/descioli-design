import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Page = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--window-height);
  width: 100%;
  text-align: center;
  flex-flow: column;
  h1 {
    font-size: 4em;
  }
`;

const NotFoundPage = () => (
  <Page>
    <h1>Notta</h1>
    <h2>There's nothing here</h2>
    <p>The page you are looking does not exist</p>
    <Link to="/">Head Home</Link>
  </Page>
);

export default NotFoundPage;
