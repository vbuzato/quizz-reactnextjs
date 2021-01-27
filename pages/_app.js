import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import PropTypes from 'prop-types';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  input {
    width: 100%;
    padding: 15px 20px;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    border-radius: ${db.theme.borderRadius};
    border: 1px solid ${db.theme.colors.secondary}aa;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 30px;
    text-align: center;
  }
  input:focus,
  input:defined,
  input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${db.theme.colors.primary};
    font-family: 'Raleway', sans-serif;
    opacity: 1; /* Firefox */
  }
  button {
    background-color: ${db.theme.colors.secondary};
    color: ${db.theme.colors.primary};
    padding: 15px 20px;
    width: 100%;
    border-radius: ${db.theme.borderRadius};
    border: none;
    /* border: 1px solid ${db.theme.colors.contrastText}ff; */
    margin-top: 20px;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    transition: 0.3s;
    cursor: pointer;
  }
  button:hover {
    background-color: ${db.theme.colors.primary};
    color: ${db.theme.colors.secondary};
    transition: 0.3s;
  }
  button:disabled {
    background-color: #555;
    color: #888;
  }
`;
const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,200;1,300;1,400;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};
