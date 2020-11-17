import React from 'react';
import { Body } from '../Body';
import { Footer } from '../Footer';
import { Header } from '../Header';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </Container>
  );
};

export default Layout;
