import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  height: 100vh;
  width: 100%;

  display: flex;
`;

export const Content = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin-top: 36px;
    font-size: 36px;
  }

  a {
    margin-top: 8px;
    text-decoration: none;
    display: flex;
    transition: all 0.2s;
    color: #0030ff;

    &:hover {
      transform: translateY(-3px);
    }

    svg {
      margin-right: 8px;
    }
  }

  img {
    margin: 36px 0;
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  span {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  hr {
    margin-top: 8px;
    width: 90%;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 16px;
    }
  }
`;
