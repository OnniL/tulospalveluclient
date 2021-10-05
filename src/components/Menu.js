import {Form, FormText} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React from 'react';
import {useHistory} from 'react-router-dom';

const Menu = () => {
  const history = useHistory();
  const handleSettings = () => {
    history.push('/settings')
  }


  return (
      <div>
        <h2>Testiä</h2>
        <Button onClick={handleSettings}>Asetuksiin</Button>
      </div>
  );
};
export default Menu;