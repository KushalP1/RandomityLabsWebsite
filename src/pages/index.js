import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Gallery from 'components/gallery';
import Title from 'components/title';
import styled from 'styled-components';

const Index = ({ data }) => (
  <Container>
    <Gallery items={data.aboutJson.gallery} />
  </Container>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

const Container = styled.div`
  background-color: #fafafa;
`;
export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
