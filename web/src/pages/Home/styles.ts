import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  height: 100vh;
  width: 100%;

  display: flex;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #0030ff;
    text-transform: uppercase;
    margin-top: 16px;
  }

  img {
    width: 100%;
  }

  hr {
    width: 90%;
  }
`;

export const Content = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
`;
