import React from 'react';
import {Container} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import '../Styles.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Molkky = () => {
  const history = useHistory();

  return (
      <Container className="my-auto">
        <h1>Ryhmä: {localStorage.getItem('group')}</h1>

      </Container>
  );
};
export default Molkky;