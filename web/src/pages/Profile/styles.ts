import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

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

  form {
    margin-top: 16px;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 18px;
      margin-bottom: 8px;
    }

    hr {
      margin: 16px 0;
    }
  }
`;

export const Close = styled.button`
  top: 10px;
  right: 10px;
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

export const AvatarInput = styled.div`
  margin-bottom: 16px;
  position: relative;
  align-self: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 38px;
    height: 38px;
    background: #0030ff;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    transition: all 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }

    &:hover {
      background: ${shade(0.2, '#0030ff')};
    }
  }
`;
