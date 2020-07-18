import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isError: boolean;
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
    props.isError &&
    css`
      border-color: #c53030;
      box-shadow: 0 0.1px 4px #c53030;
    `}

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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
