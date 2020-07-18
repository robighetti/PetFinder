import React from 'react';
import {
  FiMail,
  FiLock,
  FiUser,
  FiEdit,
  FiMap,
  FiMapPin,
} from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Close } from './styles';

interface MenuProps {
  setSignUp: Function;
}

const SignUp: React.FC<MenuProps> = ({ setSignUp }) => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <Close type="button" onClick={() => setSignUp(false)}>
          <MdClose size={20} />
        </Close>
        <h1>Cadastre-se e ajude um pet</h1>

        <Form onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Digite seu nome" />
          <Input name="email" icon={FiMail} placeholder="Digite seu email" />
          <Input name="street" icon={FiEdit} placeholder="Digite sua rua" />
          <Input name="number" icon={FiEdit} placeholder="Qual o número" />
          <Input name="city" icon={FiMapPin} placeholder="Qual sua cidade" />
          <Input name="state" icon={FiMap} placeholder="Qual seu estado" />

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

export default SignUp;
