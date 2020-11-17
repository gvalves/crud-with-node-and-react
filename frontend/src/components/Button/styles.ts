import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.3725rem 0.75rem;
  border-radius: 0.25rem;
  line-height: 1.5;

  outline: none;
  cursor: pointer;

  background-color: var(--blue);
  border: 1px solid var(--blue);
  color: var(--white);
  transition: background-color, color 0.1s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &.theme-red {
    background-color: var(--red);
    border: 1px solid var(--red);
    color: var(--white);

    &:hover {
      background-color: #dc0515;
    }

    &:focus {
      border-color: #cc3545;
      box-shadow: 0 0 0 0.2rem rgba(255, 34, 103, 0.25);
    }
  }

  &.outline-green {
    background-color: transparent;
    border: 1px solid var(--green);
    color: var(--green);

    &:hover {
      background-color: #00bb40;
      color: var(--white);
    }

    &:focus {
      border-color: #58cc65;
      box-shadow: 0 0 0 0.2rem rgba(0, 255, 123, 0.25);
    }
  }
`;
