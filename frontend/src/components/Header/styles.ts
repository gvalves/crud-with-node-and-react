import styled from 'styled-components';

import { MdMenu } from 'react-icons/md';

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  min-height: 3.5rem;
  padding: 0.5rem 1rem;

  background-color: var(--dark-gray);

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;

    height: 3.5rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      text-decoration: none;
    }
  }
`;

export const MenuBurger = styled.div`
  display: flex;

  padding: 0.25rem 0.75rem;
  border: 1px solid var(--white50);
  border-radius: 0.25rem;

  @media (min-width: 992px) {
    display: none;
  }

  cursor: pointer;
`;

export const MenuBurgerIcon = styled(MdMenu)`
  width: 30px;
  height: 30px;

  color: var(--white50);
`;

export const Brand = styled.span`
  padding: 0.3125rem 0;
  margin-right: 1rem;

  font-size: 1.25rem;
  color: var(--white);
`;
