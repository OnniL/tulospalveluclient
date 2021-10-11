import React, {useEffect, useRef, useState} from 'react';
import {Col, Container, Form, InputGroup, Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import '../Styles.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

let scores = [];
let strikes = [];
let playerLost = [];
let players = [];
let currentPlayer = 0;
let roundCounter = 1;
let rows = [1];
let string;
let allScores = [];

const Molkky = () => {
  const history = useHistory();
  const [nameGrid, setNameGrid] = useState();
  const [scoreGrid, setScoreGrid] = useState();
  const [validated, setValidated] = useState(false);
  const [newScore, setNewScore] = useState();

  const handleScoreChange = (event) => {
    console.log(event.target.value);
    setNewScore(event.target.value);
  };

  const showStartGrid = () => {
    setNameGrid('');
    let player;
    players = [];
    let playerAmount = parseInt(localStorage.getItem('playerAmount'));

    for (let i = 0; i < playerAmount; i++) {
      player = localStorage.getItem('player' + i);

      if (player !== null) {
        players.push(player);
        scores.push(0);
        strikes.push(0);
        playerLost.push(false);
      }
    }
    console.log(players);
    setNameGrid(players.map((row) =>
        <Col className="grid-item">{row + ': 0'} </Col>,
    ));
  };

  const updateScore = (playerToUpdate, result) => {
    if (parseInt(result) === 0) {
      strikes[playerToUpdate]++;
    } else {
      scores[playerToUpdate] += parseInt(result);
      strikes[playerToUpdate] = 0;
    }

    if (scores[playerToUpdate] === 50) {
      winnerFound();
    } else if (scores[playerToUpdate] > 50) {
      scores[playerToUpdate] = 25;
    } else if (strikes[playerToUpdate] >= 3) {
      playerLost[playerToUpdate] = true;
    }
    setNameGrid(scores.map((row, i) =>
        <Col className="grid-item">{players[i] + ': ' + scores[i]}</Col>));
  };

  const addNewScore = (event) => {

    event.preventDefault();
    let score = 0;
    let gameGrid;
    score = newScore;


    if (score > 12 || score < 0) {
      alert('Anna tulos väliltä 0-12!');
    } else {
      allScores.push(score)
      console.log(allScores[0])
      updateScore(currentPlayer, score);
      setScoreGrid(rows.map((row) =>
              <Row>
                {scores.map((score, i) =>
                    <Col className="grid-item">{"tulos: " + allScores[row * players.length + i]}</Col>)}
              </Row>
          )
      );

      currentPlayer++;
      if (currentPlayer === players.length) {
        currentPlayer = 0;
        roundCounter++;
        rows.push(roundCounter);
      }
    }

  };

  const winnerFound = () => {
    alert('Voittoja löydetty jeejee');
  };

  useEffect(() => {
    showStartGrid();
  }, []);

  return (
      <Container className="my-auto">
        <h1>Mölkky</h1>
        <Container className="grid-container">
          <Row>
            {nameGrid}
          </Row>
        </Container>
        <Container className="grid-container">
          {scoreGrid}
        </Container>
        <Form noValidate validated={validated} onSubmit={addNewScore}>
          <Col xs="auto">
            <Form.Control type="text"
                          value={newScore}
                          onChange={handleScoreChange}
                          placeholder="0-12"
                          required>
            </Form.Control>
          </Col>
          <Col xs="auto">
            <Button variant="primary"
                    type="submit"
                    size="sm">Lisää tulos
            </Button>
          </Col>
        </Form>
      </Container>
  );
};
export default Molkky;