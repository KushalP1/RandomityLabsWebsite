import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Container, Text, Label } from './item.css';

const Item = ({ title, copy, image }) => (
  // <figure>

  //   <a href="https://github.com/KushalP1">
  //     <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  //   </a>

  //   <figcaption>
  //     <Title>{title}</Title>
  //     <Copy>{copy}</Copy>
  //   </figcaption>
  // </figure>

  <Container>
    <Label>
      <Text>{title}</Text>
    </Label>
  </Container>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
