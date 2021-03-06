import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">Portfolio</Link>
      </li>
      <li>
        <Link to="/careers">Careers</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
