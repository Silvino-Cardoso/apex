import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap'

import { LabelInput } from './components/Input'


function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <LabelInput 
          id='Id-01' 
          label='Nome' 
          helptext="Texto de ajuda" 
          type='text' />
        </Col>
      </Row>

      <Row>
        <Col>
          <LabelInput 
          id='Id-02' 
          label='Email' 
          helptext="seu@email.com" 
          type='email' />
        </Col>
      </Row>

      <Row>
        <Col>
          <LabelInput 
          id='Id-03' 
          label='Senha' 
          helptext="Texto de ajuda" 
          type='password' />
        </Col>

      </Row>
      <Button color="primary">primary</Button>{' '}
    </Container>
  );
}

export default App;
