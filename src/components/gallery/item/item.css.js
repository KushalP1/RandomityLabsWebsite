import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
export const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 260px;
  background: url(Landing.png);
  border-radius: 20px;
`;

export const Label = styled.div`
  position: absolute;
  width: 200px;
  height: 60px;
  left: -10px;
  top: 50px;

  background: #f67280;
  border-radius: 7.5px;
`;
export const Text = styled.text`
  position: absolute;
  left: -4.17%;
  right: 20.83%;
  top: 19.23%;
  bottom: 57.69%;

  font-family: Quicksand;
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
