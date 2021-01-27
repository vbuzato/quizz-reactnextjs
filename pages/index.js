import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  BackgroundSite, Container, MainPage, SubTitle, Title,
} from '../src/components/quiz';

export default function Home() {
  const [nome, setNome] = useState('');
  const router = useRouter();

  const sendFormData = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${nome}`);
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
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
            />
            <button type="submit" disabled={nome.length === 0}>
              Jogar!
            </button>
          </form>
        </Container>
      </MainPage>
    </BackgroundSite>
  );
}
