import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

import { Button } from '../../../Button';

import {
  Container,
  MenuList,
  MenuItem,
  SearchInput,
  SearchWrapper,
} from './styles';

const Menu: React.FC = () => {
  const [menu, setMenu] = useState<HTMLElement>();
  const isMenuVisible = useSelector(
    (state: RootState) => state.menuReducer.isMenuVisible
  );

  useEffect(() => {
    setMenu(document.querySelector('#menu-nav') as HTMLElement);
  }, []);

  useEffect(() => {
    if (isMenuVisible) {
      $(menu as HTMLElement).slideDown();
    } else {
      $(menu as HTMLElement).slideUp();
    }
  }, [isMenuVisible]);

  let isMobile: boolean = window.innerWidth < 992;

  const fixMenu = () => {
    if (window.innerWidth < 992) {
      if (!isMobile && menu) {
        menu.style.display = 'none';
        isMobile = true;
      }
    } else if (menu && isMobile) {
      menu.style.display = 'flex';
      isMobile = false;
    }
  };

  window.addEventListener('resize', fixMenu);

  return (
    <Container id='menu-nav'>
      <MenuList>
        <MenuItem>
          <Link to='/'>Home</Link>
        </MenuItem>

        <MenuItem>
          <Link to='/portfolio'>Cadastro de Portfólio</Link>
        </MenuItem>

        <MenuItem>
          <Link to='/'>Dropdown</Link>
        </MenuItem>

        <MenuItem>
          <Link to='/'>Disabled</Link>
        </MenuItem>
      </MenuList>

      <SearchWrapper>
        <SearchInput placeholder='Search' />
        <Button className='outline-green'>Search</Button>
      </SearchWrapper>
    </Container>
  );
};

export default Menu;
