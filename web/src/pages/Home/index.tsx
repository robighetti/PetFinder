import React, { useState } from 'react';

import backgroundImage from '../../assets/background.png';
import PetList from '../PetList';
import Menu from '../Menu';
import SignIn from '../SignIn';
import SignUp from '../SignUp';

import { Container, Header, Content } from './styles';

const Home: React.FC = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <Container>
      {login && <SignIn setLogin={setLogin} />}
      {signUp && <SignUp setSignUp={setSignUp} />}
      <Content>
        <Header>
          <h1>Pet Finder</h1>
          <img src={backgroundImage} alt="PetFinder" />
          <hr />
        </Header>

        <Menu setLogin={setLogin} setSignUp={setSignUp} />
      </Content>

      <PetList />
    </Container>
  );
};

export default Home;
