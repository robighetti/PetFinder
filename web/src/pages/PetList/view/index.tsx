import React from 'react';
import { MdClose } from 'react-icons/md';

import backgroundImage from '../../../assets/background.png';
import { PetProps } from '../index';
import { Container, Content, Close } from './styles';

interface ViewProps {
  setOpenView: Function;
  pet: PetProps;
}

const View: React.FC<ViewProps> = ({ pet, setOpenView }) => {
  return (
    <Container>
      <Content>
        <Close type="button" onClick={() => setOpenView(false)}>
          <MdClose size={20} />
        </Close>

        <h1>Me adote...</h1>

        <img src={backgroundImage} alt="PetFinder" />

        <label htmlFor="name">
          Meu nome é: <strong id="name">{pet.name}</strong>
        </label>

        <label htmlFor="race">
          Raça: <strong id="race">{pet.race}</strong>
        </label>

        <label htmlFor="age">
          Tenho <strong id="age">{pet.age} anos</strong>
        </label>

        <label htmlFor="weight">
          Peso: <strong id="weight">{pet.weight} Kgs</strong>
        </label>
      </Content>
    </Container>
  );
};

export default View;
