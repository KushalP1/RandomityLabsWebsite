import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 0 4rem;
  margin: 1rem 0;
  border-radius: 50%;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
