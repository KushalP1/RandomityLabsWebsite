import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Quicksand from '../../../fonts/Quicksand.ttf';

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

  <Container as="button">
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

const Container = styled.div`
  width: 240px;
  height: 260px;
  background: url(../../images/portfolio/1.png);
  background-color: papayawhip;
  background-repeat: none;
  border-radius: 20px;
  border: 3px solid #fafafa;
`;
const Label = styled.div`
  position: absolute;
  width: 200px;
  height: 60px;
  left: -10px;
  top: 50px;

  background: #f67280;
  border-radius: 7.5px;
`;
const Text = styled.p`
  position: absolute;
  font-family: ${Quicksand};
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-indent: 20px;
  text-transform: capitalize;
  color: #fafafa;
`;
