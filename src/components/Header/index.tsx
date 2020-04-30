import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  pageName?: 'dashboard' | 'importar';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  pageName,
}: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className={pageName === 'dashboard' ? 'selected' : ''} to="/">
          Listagem
        </Link>
        <Link
          className={pageName === 'importar' ? 'selected' : ''}
          to="/import"
        >
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
