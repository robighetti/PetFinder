import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationsErrors from '../../utils/getValidationErrors';

import { Container, AnimationContainer, Content, Close } from './styles';

interface MenuProps {
  setLogin: Function;
}

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC<MenuProps> = ({ setLogin }) => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido!')
            .required('O Email é obrigatório!'),

          password: Yup.string().required('Senha obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  const handleLogin = useCallback(() => {
    setLogin(false);
  }, [signIn, addToast]);

  return (
    <Container>
      <Content>
        <Close type="button" onClick={handleLogin}>
          <MdClose size={20} />
        </Close>
        <AnimationContainer>
          <h1>Login</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail} placeholder="Digite seu email" />
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

export default SignIn;
