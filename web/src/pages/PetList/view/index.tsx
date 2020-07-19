import React from 'react';
import { MdClose } from 'react-icons/md';

import { PetProps } from '../index';
import { Container, Content, Close } from './styles';

interface ViewProps {
  setOpenView: Function;
  pet: PetProps;
}

const View: React.FC<ViewProps> = ({ pet, setOpenView }) => {
  console.log(pet);
  return (
    <Container>
      <Content>
        <Close type="button" onClick={() => setOpenView(false)}>
          <MdClose size={20} />
        </Close>
        <h1>Me adote...</h1>

        <label htmlFor="name">
          Meu nome é: <span>{pet.name}</span>
        </label>
      </Content>
    </Container>
  );
};

export default View;
