import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterHeader = styled.div`
  padding: 0.75rem 1.25rem;

  background-color: var(--black3);
  box-shadow: 0 0 1px var(--gray);
`;

export const FooterBody = styled.div`
  padding: 1.25rem;

  > h5 {
    font-size: 1.25rem;

    margin-bottom: 0.75rem;
  }

  > p {
    margin-bottom: 1rem;
  }
`;
