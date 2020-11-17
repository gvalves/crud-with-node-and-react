import React from 'react';

import { Button } from '../Button';

import { Container, FooterHeader, FooterBody } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterHeader>Featured</FooterHeader>
      <FooterBody>
        <h5>Special title treatment</h5>
        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Button>Go somewhere</Button>
      </FooterBody>
    </Container>
  );
};

export default Footer;
