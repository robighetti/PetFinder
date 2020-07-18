import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
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
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationsErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import { Container, AnimationContainer, Content, Close } from './styles';

interface MenuProps {
  setSignUp: Function;
}

interface SignUpFormData {
  name: string;
  email: string;
  street: string;
  number: string;
  city: string;
  state: string;
  password: string;
}

const SignUp: React.FC<MenuProps> = ({ setSignUp }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O Nome é obrigatório!'),
          email: Yup.string()
            .email('Digite um email válido!')
            .required('O Email é obrigatório!'),
          street: Yup.string().required('O endereço é obrigatório!'),
          number: Yup.string().required('O numero é obrigatório!'),
          city: Yup.string().required('A cidade é obrigatória!'),
          state: Yup.string().required('O estado é obrigatório!'),
          password: Yup.string().min(6, 'No mínimo 6 digitos!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');
        setSignUp(false);

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao cadastrar novo usuário',
          description: 'Verifique seus dados !',
        });
      }
    },
    [addToast, history],
  );

  const handleSignUp = useCallback(() => {
    setSignUp(false);
  }, []);

  return (
    <Container>
      <Content>
        <Close type="button" onClick={handleSignUp}>
          <MdClose size={20} />
        </Close>
        <AnimationContainer>
          <h1>Cadastre-se e ajude um pet</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
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
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
