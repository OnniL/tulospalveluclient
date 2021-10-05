import {Form, FormText} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useHistory} from 'react-router-dom';


const Settings = () => {

  const history = useHistory();
  const handleSettings = () => {
    history.push('/menu')
  }

  return (
      <div>
        <h1>Asetukset</h1>
        <h2>Light/Dark Mode</h2>
        <ButtonGroup className="buttonGroup">
          <Button>Light</Button>
          <Button>Dark</Button>
          <Button onClick={handleSettings}>Takaisin</Button>
        </ButtonGroup>
      </div>
  );
};

export default Settings;