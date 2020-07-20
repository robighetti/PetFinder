import React, { useState, useEffect, useCallback } from 'react';
import { FiEye, FiEdit, FiDelete, FiMail } from 'react-icons/fi';

/* material-ui */
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import View from './view';
import Edit from './edit';
import Delete from './delete';

import {
  Container,
  Actions,
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from './styles';

interface UserProps {
  name: string;
  email: string;
  state: string;
}

export interface PetProps {
  id: string;
  name: string;
  race: string;
  age: number;
  weight: number;
  city: string;
  user_id: string;
  user: UserProps;
}

const PetList: React.FC = () => {
  const classes = useStyles(); /* material-ui */

  const [pets, setPets] = useState<PetProps[]>([]);
  const { user } = useAuth();
  const { refresh } = useToast();
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [pet, setPet] = useState<PetProps>({} as PetProps);

  useEffect(() => {
    async function loadPets() {
      if (user) {
        const response = await api.get(`/pets/${user.city}`);

        setPets(response.data);
      } else {
        const response = await api.get('/pets');

        setPets(response.data);
      }
    }

    loadPets();
  }, [user, refresh]);

  const handleView = useCallback((data) => {
    setPet(data);
    setOpenView(true);
  }, []);

  const handleEdit = useCallback((data) => {
    setPet(data);
    setOpenEdit(true);
  }, []);

  const handleDelete = useCallback((data) => {
    setPet(data);
    setOpenDelete(true);
  }, []);

  const handleEmail = useCallback(async (data) => {
    setPet(data);
    setOpenEmail(true);

    await api.post('/users/email', {
      petUserName: data.name,
      petEmail: data.user.email,
    });

    alert(
      'O proprietário do Pet foi notificado por email ! Logo ele entrará em contato',
    );
  }, []);

  return (
    <Container>
      {openView && <View pet={pet} setOpenView={setOpenView} />}
      {openEdit && <Edit pet={pet} setOpenEdit={setOpenEdit} />}
      {openDelete && <Delete pet={pet} setOpenDelete={setOpenDelete} />}
      <h1>Precisamos de um lar</h1>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Nome do Pet</StyledTableCell>
              <StyledTableCell align="right">Raça</StyledTableCell>
              <StyledTableCell align="right">Idade</StyledTableCell>
              <StyledTableCell align="right">Peso</StyledTableCell>
              <StyledTableCell align="right">Cidade</StyledTableCell>
              <StyledTableCell align="right">Contato</StyledTableCell>
              <StyledTableCell align="center">Ações</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet) => (
              <StyledTableRow key={pet.id}>
                <StyledTableCell align="left">{pet.name}</StyledTableCell>
                <StyledTableCell align="right">{pet.race}</StyledTableCell>
                <StyledTableCell align="right">{pet.age} anos</StyledTableCell>
                <StyledTableCell align="right">
                  {pet.weight} Kgs
                </StyledTableCell>
                <StyledTableCell align="right">
                  {pet.city}/{pet.user.state}
                </StyledTableCell>
                <StyledTableCell align="right">{pet.user.name}</StyledTableCell>
                <StyledTableCell align="center">
                  <Actions>
                    {user && (
                      <button type="button" onClick={() => handleEmail(pet)}>
                        <FiMail size={22} />
                      </button>
                    )}

                    <button type="button" onClick={() => handleView(pet)}>
                      <FiEye size={22} />
                    </button>

                    {user && (
                      <button type="button" onClick={() => handleEdit(pet)}>
                        <FiEdit size={22} />
                      </button>
                    )}

                    {user && (
                      <button type="button" onClick={() => handleDelete(pet)}>
                        <FiDelete size={22} color="#c53030" />
                      </button>
                    )}
                  </Actions>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PetList;
