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
        <h1>Ryhmä: {localStorage.getItem('group')}</h1>
        <ButtonGroup Vertical className="buttonGroup">
          <Button size="lg" onClick={handleNewGame}>Uusi Peli</Button>
          <Button size="lg">Statistiikka</Button>
          <Button size="lg" onClick={handleSettings}>Asetukset</Button>
          <Button size="lg">Kirjaudu Ulos</Button>
        </ButtonGroup>
      </div>
  );
};
export default Menu;