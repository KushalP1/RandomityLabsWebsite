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
        <a href="https://github.com/KushalP1">Careers</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
