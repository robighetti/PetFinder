import React from 'react';
import { FiEye, FiEdit, FiDelete } from 'react-icons/fi';

import { Container, ListItem, Actions } from './styles';

import dog1 from '../../assets/pets/dog1.jpg';
import dog2 from '../../assets/pets/dog2.jpg';
import dog3 from '../../assets/pets/dog3.jpg';
import dog4 from '../../assets/pets/dog4.jpg';
import cat1 from '../../assets/pets/cat1.jpg';
import cat2 from '../../assets/pets/cat2.jpg';
import cat3 from '../../assets/pets/cat3.jpg';
import cat4 from '../../assets/pets/cat4.jpg';

const PetList: React.FC = () => {
  return (
    <Container>
      <h1>Precisamos de um lar</h1>
      <ul>
        <ListItem>
          <img src={dog1} alt="Dog1" />

          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>

        <ListItem>
          <img src={dog2} alt="Dog2" />
          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>

        <ListItem>
          <img src={dog3} alt="Dog3" />
          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>

        <ListItem>
          <img src={dog4} alt="Dog4" />
          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>

        <ListItem>
          <img src={cat1} alt="cat1" />
          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>

        <ListItem>
          <img src={cat2} alt="cat2" />
          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>

        <ListItem>
          <img src={cat3} alt="cat3" />
          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>

        <ListItem>
          <img src={cat4} alt="cat4" />
          <label htmlFor="name">
            Nome
            <strong id="name">Ziquizira</strong>
          </label>

          <label htmlFor="race">
            Raça
            <strong id="race">Vira lata</strong>
          </label>

          <label htmlFor="city">
            Cidade
            <strong id="city">Piracicaba/SP</strong>
          </label>
          <Actions>
            <button type="button">
              <FiEye size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiEdit size={28} color="#0030ff" />
            </button>

            <button type="button">
              <FiDelete size={28} color="#0030ff" />
            </button>
          </Actions>
        </ListItem>
      </ul>
    </Container>
  );
};

export default PetList;
