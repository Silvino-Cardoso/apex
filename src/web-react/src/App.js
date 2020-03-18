import React, { Fragment } from 'react';

import { createGlobalStyle } from "styled-components"

import { Routes } from './routes'

// aplica estilos globalmente

const GlobalStyle = createGlobalStyle`
html,Body, #root {
  width:100%;
  height:100%;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Poppins', sans-serif;
}
`

function App() {
  return (
    <Fragment>
      <Routes />
      <GlobalStyle />
    </Fragment>
  )
}


export default App;
