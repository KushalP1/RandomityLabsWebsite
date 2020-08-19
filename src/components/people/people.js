import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/people/item';
import { Container } from './people.css';

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
