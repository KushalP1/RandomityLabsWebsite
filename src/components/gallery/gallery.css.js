import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 260px;
  width: 860px;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
