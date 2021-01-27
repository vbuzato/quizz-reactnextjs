import React, { useState } from 'react';
import styled from 'styled-components';
// import Container from '../src/components/Container';
import db from '../db.json';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3.3em;
  text-align: center;
  width: 100%;
  text-shadow: 1px 1px 1px #555555;
  margin: 0;
  padding: 0;
  /* height: 1.2em; */
  /* border: 1px dashed ${db.theme.colors.secondary}77;
  border-radius: 100px;
  background-color: rgba(0, 0, 0, 0.5); */
  padding: 30px;

`;

const BackgroundSite = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url(${db.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MainPage = styled.main`
  flex: 1;
  width: 100%;
  height: 100vh;
  background-color: #000000bb;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  color: ${db.theme.colors.primary};
  padding: 20px;
  width: 90%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px dotted #ffffff8f;
  /* margin: 20px; */
`;

const SubTitle = styled.div`
  display: block;
  color: ${db.theme.colors.primary};
  font-size: 1em;
  text-align: center;
  width: 100%;
  /* -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4); */
  border-radius: ${db.theme.borderRadius};
  padding: 20px;
`;

export default function Home() {
  const [email, setEmail] = useState('');

  const sendFormData = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <BackgroundSite>
      <MainPage>
        <Title>Poker Quiz</Title>
        <Container>
          <SubTitle>Teste seus conhecimentos no poker</SubTitle>
          <form onSubmit={sendFormData}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu nome"
            />
            <button type="submit" disabled={email.length === 0}>
              Jogar!
            </button>
          </form>
        </Container>
      </MainPage>
    </BackgroundSite>
  );
}
