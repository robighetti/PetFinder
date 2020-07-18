import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-right: 16px;

  ul {
    margin-top: 16px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  background: rgba(0, 48, 255, 0.05);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 100px;
  transition: all 0.2s;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background: rgba(0, 48, 255, 0.15);
  }
`;

export const Actions = styled.div`
  margin-right: 36px;

  button {
    border: 0;
    margin-right: 16px;
    background: transparent;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
    }

    svg {
      margin-right: 16px;
    }
  }
`;
