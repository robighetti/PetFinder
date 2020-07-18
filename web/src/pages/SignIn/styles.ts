import styled, { keyframes } from 'styled-components';

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
  width: 500px;
  height: 320px;
  background: #fff;

  padding: 24px;
  border-radius: 10px;
`;

const moveFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${moveFromLeft} 1s;

  h1 {
    text-align: center;
  }

  form {
    margin-top: 24px;
  }
`;

export const Close = styled.button`
  top: -12px;
  right: -12px;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fa6363;
  border: 0;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
  }
`;
