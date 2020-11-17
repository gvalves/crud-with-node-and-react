import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;

  border-radius: 0.25rem;
  border: 1px solid #ced4da;

  outline: none;
`;

export const TextArea = styled.textarea`
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;

  border-radius: 0.25rem;
  border: 1px solid #ced4da;

  outline: none;
  resize: vertical;
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  > button {
    margin-right: 0.5rem;
  }
`;
