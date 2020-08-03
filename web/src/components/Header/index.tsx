import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, Topbar, HeaderContent } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <Topbar>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>

        <img src={logoImg} alt="Proffy" />
      </Topbar>

      <HeaderContent>
        <strong>{title}</strong>
        {children}
      </HeaderContent>
    </Container>
  );
};

export default Header;
