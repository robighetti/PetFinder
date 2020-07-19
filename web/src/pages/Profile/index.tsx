import React, { useCallback, useRef, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import {
  FiMail,
  FiLock,
  FiUser,
  FiEdit,
  FiMap,
  FiMapPin,
  FiCamera,
} from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationsErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import {
  Container,
  AnimationContainer,
  Content,
  Close,
  AvatarInput,
} from './styles';

interface MenuProps {
  setOpen: Function;
}

interface ProfileFormData {
  name: string;
  email: string;
  street: string;
  number: string;
  city: string;
  state: string;
  password: string;
}

const Profile: React.FC<MenuProps> = ({ setOpen }) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { user, updateUser } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
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
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.put('/users', data);
        updateUser(response.data);

        history.push('/');
        setOpen(false);

        addToast({
          type: 'success',
          title: 'Cadastro atualizado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao atualizar o usuário',
          description: 'Verifique seus dados !',
        });
      }
    },
    [addToast, history],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);
        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado com sucesso',
          });
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <Close type="button" onClick={() => setOpen(false)}>
          <MdClose size={24} />
        </Close>
        <AnimationContainer>
          <Form initialData={user} ref={formRef} onSubmit={handleSubmit}>
            <AvatarInput>
              <img
                src={
                  user.avatar_url
                    ? user.avatar_url
                    : `https://ui-avatars.com/api/?font-size=0.40&background=0030ff&color=fff&name=${user.name}`
                }
                alt={user.name}
              />
              <label htmlFor="avatar">
                <FiCamera />
                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
            </AvatarInput>

            <h1>Meu perfil</h1>

            <Input name="name" icon={FiUser} placeholder="Digite seu nome" />
            <Input name="email" icon={FiMail} placeholder="Digite seu email" />

            <Input name="street" icon={FiEdit} placeholder="Digite sua rua" />
            <Input name="number" icon={FiEdit} placeholder="Qual o número" />

            <Input name="city" icon={FiMapPin} placeholder="Qual sua cidade" />
            <Input name="state" icon={FiMap} placeholder="Qual seu estado" />

            <hr />

            <Input
              name="old_password"
              icon={FiLock}
              placeholder="Digite sua senha atual"
              type="password"
            />

            <Input
              name="password"
              icon={FiLock}
              placeholder="Digite sua nova senha"
              type="password"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              placeholder="Confirme sua senha"
              type="password"
            />

            <Button type="submit">Atualizar</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Profile;
