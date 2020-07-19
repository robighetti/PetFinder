import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationsErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import { Container, Content, Close } from './styles';

interface PetProps {
  setPets: Function;
}

interface PetFormData {
  name: string;
  race: string;
  age: number;
  weight: number;
  city: string;
}

const Pet: React.FC<PetProps> = ({ setPets }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: PetFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O Nome é obrigatório!'),
          race: Yup.string().required('A raça é obrigatória!'),
          age: Yup.number().required('A idade é obrigatória!'),
          weight: Yup.number().required('O peso é obrigatório!'),
          city: Yup.string().required('A cidade é obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/pets', data);

        history.push('/dashboard');
        setPets(false);

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
          title: 'Erro ao cadastrar novo pet',
          description: 'Verifique seus dados !',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <Close type="button" onClick={() => setPets(false)}>
          <MdClose size={20} />
        </Close>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastro de Pet</h1>
          <Input name="name" placeholder="Digite o nome" />
          <Input name="race" placeholder="Digite a raça" />
          <Input name="age" placeholder="Digite a idade" type="number" />
          <Input name="weight" placeholder="Digite o peso" type="number" />
          <Input name="city" placeholder="Digite a cidade" />
          <Button type="submit">Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Pet;
