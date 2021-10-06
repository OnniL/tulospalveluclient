import {Col, Form, FormText, Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Menu from './Menu';

/**
 * @author Onni Lukkarila
 */

const Players = () => {

  const [newPlayer, setNewPlayer] = useState('');
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  let json;

  const handlePlayerChange = (event) => {
    console.log(event.target.value);
    setNewPlayer(event.target.value);
  };

  const getPlayers = () => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        json = JSON.parse(xmlhttp.responseText);
        if (json.numOfRows > 0) { // something found
          // showList(json);
          console.log('Pelaajia löytyi');
        } else {
          alert('Pelaajia ei löytynyt!');
        }
      }
    };
    xmlhttp.open('GET',
        'https://rocky-cliffs-72708.herokuapp.com/api/players?group=' +
        localStorage.getItem('group'), true);
    console.log('testi1');
    xmlhttp.send();
    console.log('testi2');
  };

  const addNewPlayer = () => {

  };

  return (
      <div>
        <h2>Valitse pelaajat</h2>
        <Form noValidate validated={validated} onSubmit={addNewPlayer}>
          <Row className="mb-4">
            <Col xs="auto">
              <Form.Control type="text" value={newPlayer}
                            onChange={handlePlayerChange}>
              </Form.Control>
            </Col>
            <Col xs="auto">
              <Button variant="primary" type="submit" size="sm">Lisää</Button>
            </Col>
          </Row>
        </Form>

      </div>
  );
};
export default Players;