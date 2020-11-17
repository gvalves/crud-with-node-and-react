import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
