import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(0, 48, 255, 0.1);
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #0030ff;
      border: 2px solid #0030ff;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #0030ff;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #0030ff;

    &::placeholder {
      color: #999;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
