import React, { useCallback } from 'react';

import Button from '../../components/Button';

import { Container } from './styles';

interface MenuProps {
  setLogin: Function;
  setSignUp: Function;
}

const Menu: React.FC<MenuProps> = ({ setLogin, setSignUp }) => {
  const handleLogin = useCallback(() => {
    setLogin(true);
  }, []);

  const handleSignUp = useCallback(() => {
    setSignUp(true);
  }, []);

  return (
    <Container>
      <h1>Faça um pet feliz</h1>
      <span>Adote</span>

      <Button type="button" onClick={handleLogin}>
        Entrar
      </Button>
      <Button type="button" onClick={handleSignUp}>
        Cadastre-se
      </Button>
    </Container>
  );
};

export default Menu;
