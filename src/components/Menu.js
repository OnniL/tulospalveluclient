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

  const handleLogin = () => {
    history.push('/login')
  }

  const handleStatistics = () => {
    history.push('/statistics')
  }


  return (
      <div>
        <h1>Ryhmä: {localStorage.getItem('group')}</h1>
        <ButtonGroup Vertical className="buttonGroup">

          <Button onClick={handleNewGame} size="lg">Uusi Peli</Button>
          <Button onClick={handleStatistics} size="lg">Statistiikka</Button>
          <Button onClick={handleSettings} size="lg">Asetukset</Button>
          <Button onClick={handleLogin} size="lg">Kirjaudu Ulos</Button>


        </ButtonGroup>
      </div>
  );
};
export default Menu;