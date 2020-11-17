import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/menu/actions';

import { Menu } from './components/Menu';

import { Container, Brand, MenuBurger, MenuBurgerIcon } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <Link to='/'>
          <Brand>Navbar</Brand>
        </Link>

        <MenuBurger onClick={() => dispatch(toggleMenu())}>
          <MenuBurgerIcon />
        </MenuBurger>
      </div>

      <Menu />
    </Container>
  );
};

export default Header;
