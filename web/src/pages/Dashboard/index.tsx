import React, { useState } from 'react';
import { FiEdit, FiLogOut } from 'react-icons/fi';

import Button from '../../components/Button';
import PetList from '../PetList';
import Profile from '../Profile';
import Pet from '../Pet';

import { useAuth } from '../../hooks/auth';

import { Container, Content, Header, Menu } from './styled';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const [open, setOpen] = useState(false);
  const [pets, setPets] = useState(false);

  return (
    <Container>
      {open && <Profile setOpen={setOpen} />}
      {pets && <Pet setPets={setPets} />}
      <Content>
        <Header>
          <strong>{user.name}</strong>
          <a href="#" onClick={() => setOpen(true)}>
            <FiEdit />
            Meu perfil
          </a>
          <img
            src={
              user.avatar_url
                ? user.avatar_url
                : `https://ui-avatars.com/api/?font-size=0.40&background=0030ff&color=fff&name=${user.name}`
            }
            alt={user.name}
          />

          <span>
            {user.city} - {user.state}
          </span>
          <hr />
        </Header>

        <Menu>
          <Button onClick={() => setPets(true)}>Cadastrar Pet</Button>
          <Button onClick={signOut}>
            <FiLogOut />
            Sair
          </Button>
        </Menu>
      </Content>

      <PetList />
    </Container>
  );
};

export default Dashboard;
