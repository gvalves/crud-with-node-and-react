import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
  border-collapse: collapse;
  color: #212529;

  thead {
    color: var(--white);
    background-color: var(--dark-gray);
  }

  th,
  td {
    border: 1px solid #dee2e6;
    padding: 0.3rem;
  }

  tbody {
    tr:nth-child(odd) {
      background-color: rgba(0, 0, 0, 0.05);
    }

    tr:nth-child(even) {
      background-color: var(--white);
    }

    tr:hover {
      background-color: rgba(0, 0, 0, 0.075);
    }
  }

  td > button {
    width: 100%;
  }
`;
