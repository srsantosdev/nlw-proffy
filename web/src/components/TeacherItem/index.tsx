import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/40436472?s=460&u=debf2c6f3ef990e94ef9f7297b9d8b7748fb6f30&v=4"
          alt="Samuel Ramos"
        />
        <div>
          <strong>Samuel Ramos</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br />
        <br />
        Apaixonado por calcular as coisas e por mudar a vida das pessoas através
        de calculos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
