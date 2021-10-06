import {Form, FormText} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React from 'react';
import {useHistory} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Menu = () => {
  const history = useHistory();
  const handleSettings = () => {
    history.push('/settings')
  }

  const handleNewGame = () => {
    history.push('/newgame')
  }


  return (
      <div>
        {/* <Button onClick={handleSettings}>Asetuksiin</Button>*/}
        <h1>Ryhmä:</h1>
        <ButtonGroup Vertical className="buttonGroup">
          <Button onClick={handleNewGame}>Uusi Peli</Button>
          <Button>Statistiikka</Button>
          <Button onClick={handleSettings}>Asetukset</Button>
          <Button>Kirjaudu Ulos</Button>
        </ButtonGroup>
      </div>
  );
};
export default Menu;