import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s 0.2s;
`;

export const Content = styled.div`
  position: relative;
  width: 700px;

  background: #fff;

  padding: 16px;
  border-radius: 10px;

  h1 {
    font-size: 28px;
  }

  > div {
    display: flex;

    button {
      margin: 10px;
    }
  }
`;

export const Close = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: transparent;
  border: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    color: #c53030;
  }
`;
