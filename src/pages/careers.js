import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import People from 'components/people';
import Title from 'components/title';

const Careers = ({ data }) => (
  <Layout>
    <Head pageTitle={data.careersJson.title} />
    <Box>
      <Title as="h2" size="large">
        {data.careersJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>

    <People items={data.careersJson.people} />

    <div style={{ height: '50vh' }} />
  </Layout>
);

Careers.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Careers;

export const query = graphql`
  query CareersQuery {
    careersJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      people {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
