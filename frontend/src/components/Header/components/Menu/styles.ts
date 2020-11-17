import styled from 'styled-components';

export const Container = styled.nav`
  display: none;
  flex-direction: column;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  list-style: none;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  padding: 8px 0;

  color: var(--white);

  > a {
    display: flex;
    width: 100%;
    padding: 0.5rem 0;

    text-decoration: none;
    color: var(--white50);

    transition: margin-left 0.2s ease-in-out;

    &.active {
      color: var(--white);
    }
  }

  &:hover > a {
    color: var(--white80);

    margin-left: 0.5rem;
  }

  @media (min-width: 992px) {
    width: auto;
    padding: 8px;

    > a {
      transition: unset;
    }

    &:hover > a {
      margin-left: unset;
    }
  }
`;

export const SearchInput = styled.input`
  padding: 0.375rem 0.75rem;
  margin-right: 0.5rem;

  border-radius: 0.25rem;
  border: 1px solid var(--gray);

  color: var(--gray);
  outline: none;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;
