import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Close } from './styles';

interface MenuProps {
  setLogin: Function;
}

const SignIn: React.FC<MenuProps> = ({ setLogin }) => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <Close type="button" onClick={() => setLogin(false)}>
          <MdClose size={20} />
        </Close>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Digite sua senha"
            type="password"
          />

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
