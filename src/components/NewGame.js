import {Form, FormText} from 'react-bootstrap';
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


  return (
      <div>
        <h1>Valitse Peli</h1>
        <ButtonGroup Vertical className="buttonGroup">
          <Button>Mölkky</Button>
          <Button>Ristiseiska*</Button>
          <Button onClick={handleSettings}>Takaisin</Button>
        </ButtonGroup>
      </div>
  );
};
export default NewGame;