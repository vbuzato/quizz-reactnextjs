import styled from 'styled-components';
import db from '../../../db.json';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3.3em;
  text-align: center;
  width: 100%;
  text-shadow: 1px 1px 1px #555555;
  margin: 0;
  padding: 0;
  padding: 30px;

`;

export const BackgroundSite = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url(${db.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainPage = styled.main`
  flex: 1;
  width: 100%;
  height: 100vh;
  background-color: #000000bb;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${db.theme.colors.primary};
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px dotted #ffffff8f;
`;

export const SubTitle = styled.div`
  display: block;
  color: ${db.theme.colors.primary};
  font-size: 1em;
  text-align: center;
  width: 100%;
  border-radius: ${db.theme.borderRadius};
  padding: 20px;
`;
