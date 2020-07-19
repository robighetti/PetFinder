import React, { useState, useEffect, useCallback } from 'react';
import { FiEye, FiEdit, FiDelete, FiMail } from 'react-icons/fi';

/* material-ui */
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

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

interface PetProps {
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

  return (
    <Container>
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
              <StyledTableRow key={1}>
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
                <StyledTableCell align="right">
                  <Actions>
                    <button type="button">
                      <FiMail size={22} />
                    </button>

                    {user && (
                      <button type="button">
                        <FiEye size={22} />
                      </button>
                    )}

                    {user && (
                      <button type="button">
                        <FiEdit size={22} />
                      </button>
                    )}

                    {user && (
                      <button type="button">
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
