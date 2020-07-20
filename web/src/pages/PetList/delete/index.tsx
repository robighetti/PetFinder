import React, { useCallback } from 'react';

import Button from '../../../components/Button';

import { useToast } from '../../../hooks/toast';
import { PetProps } from '../';
import api from '../../../services/api';

import { Container, Content } from './styles';

interface DeleteProps {
  setOpenDelete: Function;
  pet: PetProps;
}

const Delete: React.FC<DeleteProps> = ({ pet, setOpenDelete }) => {
  const { addToast } = useToast();

  const handleDelete = useCallback(async () => {
    try {
      await api.delete(`/pets/${pet.id}`);

      addToast({
        type: 'success',
        title: 'Pet excluído com sucesso',
      });
      setOpenDelete(false);
    } catch (err) {
      addToast({
        type: 'error',
        title:
          'Erro ao excluir o pet, verifique se o Pet foi cadastrado por você',
      });

      setOpenDelete(false);
    }
  }, []);

  return (
    <Container>
      <Content>
        <h1>Tem certeza de que deseja deletar o Pet {pet.name} ?</h1>

        <div>
          <Button onClick={handleDelete}>Sim</Button>
          <Button
            style={{ background: '#c53030' }}
            onClick={() => setOpenDelete(false)}
          >
            Cancelar
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default Delete;
