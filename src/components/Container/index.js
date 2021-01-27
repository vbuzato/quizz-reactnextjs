import styled from 'styled-components';
import db from '../../../db.json';

const Container = styled.div`
  color: ${db.theme.colors.primary};
  padding: 20px;
`;

export default Container;
