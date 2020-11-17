import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  > div {
    color: var(--white);
  }
`;

export const PortfolioCard = styled.div`
  background-color: var(--blue);
  border-radius: 0.25rem;
  margin-bottom: 2rem;

  > h5 {
    padding: 0.75rem 1.25rem 1.5rem;
    border-bottom: 1px solid var(--black13);
    font-size: 1.25rem;
  }

  > p {
    padding: 1.25rem;
  }
`;
