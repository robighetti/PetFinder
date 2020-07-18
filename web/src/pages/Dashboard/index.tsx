import React from 'react';
import { FiEdit, FiLogOut } from 'react-icons/fi';

import Button from '../../components/Button';
import PetList from '../PetList';

import { useAuth } from '../../hooks/auth';

import { Container, Content, Header, Menu } from './styled';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  return (
    <Container>
      <Content>
        <Header>
          <strong>{user.name}</strong>
          <a href="#" onClick={() => {}}>
            <FiEdit />
            Meu perfil
          </a>
          <img
            src={
              user.avatar_url
                ? user.avatar_url
                : `https://ui-avatars.com/api/?font-size=0.40&background=0030ff&color=fff&name=${user.name}`
            }
            alt="Rodrigo Bighetti"
          />

          <span>
            {user.city} - {user.state}
          </span>
          <hr />
        </Header>

        <Menu>
          <Button>Cadastrar Pet</Button>
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
