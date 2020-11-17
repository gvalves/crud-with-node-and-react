import React from 'react';

import { Container } from './styles';

type ClickEvent = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => unknown;

interface Props {
  className?: string;
  onClick?: ClickEvent;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
