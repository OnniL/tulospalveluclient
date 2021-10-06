import {Container, Form, FormText} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React from 'react';
import {useHistory} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NewGame = () => {
  const history = useHistory();
  const handleSettings = () => {
    history.push('/menu')
  }

  const handleMolkky = () => {
    history.push('/players')
  }


  return (
      <Container>
        <h1>Valitse Peli</h1>
        <ButtonGroup Vertical className="buttonGroup">
          <Button size="lg" onClick={handleMolkky}>Mölkky</Button>
          <Button size="lg">Ristiseiska*</Button>
          <Button size="lg" onClick={handleSettings}>Takaisin</Button>
        </ButtonGroup>
      </Container>
  );
};
export default NewGame;