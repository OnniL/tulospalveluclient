import {Col, Container, Form, FormText, Row, Table} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Menu from './Menu';

/**
 * @author Onni Lukkarila
 */

const Players = () => {

  const [newPlayer, setNewPlayer] = useState();
  const [validated, setValidated] = useState(false);
  const [playerTable, setPlayerTable] = useState();
  const history = useHistory();
  let json;
  let players = [];
  let player;

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
          console.log('Pelaajia löytyi');
          console.log(json);
          for (let i in json.rows) {
            player = {nimi: json.rows[i].nimi, checkbox: false};
            players.push(player);
          }
          // setPlayerTable(players.map(row =>
          //         <tr>
          //           <td>{row.nimi}</td>
          //           <td>{row.checkbox}</td>
          //         </tr>
          // ))
        } else {
          alert('Pelaajia ei löytynyt!');
        }
      }
    };
    xmlhttp.open('GET',
        'https://rocky-cliffs-72708.herokuapp.com/api/players?group=' +
        localStorage.getItem('group'), true);
    xmlhttp.send();
  };




  const addNewPlayer = () => {
    let player = newPlayer;
    let group = localStorage.getItem('group');
    let body;
    if (player === null || player === '') {
      alert('Kirjoita pelaajan nimi!');
    } else {
      body = {'pelaajan_nimi': player, 'ryhman_nimi': group};
      console.log(body);
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open('POST',
          'https://rocky-cliffs-72708.herokuapp.com/api/newplayer', true);
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
      xmlhttp.send(JSON.stringify(body));
      setTimeout(function() {
        getPlayers()
      }, 1000);
    }
  };

  const handleMolkkyGame = () => {
    history.push('/molkky');
  };

  useEffect(() => {
    // Update the document title using the browser API
    getPlayers()
  });

  return (
      <Container>
        <h2>Valitse pelaajat</h2>
        <Form noValidate validated={validated} onSubmit={addNewPlayer}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control type="text" value={newPlayer}
                            onChange={handlePlayerChange}>
              </Form.Control>
            </Col>
            <Col xs="auto">
              <Button variant="primary" type="submit" size="sm" onClick={addNewPlayer}>Lisää</Button>
            </Col>
          </Row>
          <Table striped responsive size="sm">
            <thead>
            <tr>
              <th>Tallennetut pelaajat</th>
            </tr>
            </thead>
            <tbody>
            {playerTable}
            </tbody>
          </Table>
          <Button onClick={getPlayers} size="sm">asd</Button>
        </Form>

      </Container>
  );
};
export default Players;