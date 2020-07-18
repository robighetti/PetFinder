import React, { useState } from 'react';

import Button from '../../components/Button';

import { Container } from './styles';

interface MenuProps {
  setLogin: Function;
  setSignUp: Function;
}

const Menu: React.FC<MenuProps> = ({ setLogin, setSignUp }) => {
  return (
    <Container>
      <h1>Faça um pet feliz</h1>
      <span>Adote</span>

      <Button type="button" onClick={() => setLogin(true)}>
        Entrar
      </Button>
      <Button type="button" onClick={() => setSignUp(true)}>
        Cadastre-se
      </Button>
    </Container>
  );
};

export default Menu;
