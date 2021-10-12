import {Form, FormText, Table, Button, Modal} from 'react-bootstrap';
import '../Styles.css';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Row from 'react-bootstrap/Row';


let uusArray = []

const Statistics = () => {
  const history = useHistory();
  const handleMenu = () => {
    history.push('/menu');
  };

  const [playerTable, setPlayerTable] = useState();
  const [AdvancedPlayerTable, setAdvancedPlayerTable] = useState();

  let json;
  let tuloksetJSON;
  let players = [];
  let player;
  let advancedPlayers = [];
  let advancedPlayer;
  /**
   * Tarkistaa, löytyykö ryhmästä pelaajia.
   */
  const getPlayers = () => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        json = JSON.parse(xmlhttp.responseText);
        if (json.numOfRows > 0) { // something found
          console.log('Pelaajia löytyi');
          console.log(json);

          for (let i in json.rows) {
            player = {
              id: i,
              nimi: json.rows[i].nimi,
              pelatutlkm: json.rows[i].pelatutlkm,
              voitotlkm: json.rows[i].voitotlkm,
            };
            players.push(player);
            console.log('Player count: ' + players.length);
          }
          if (players.length > 0) {
            getPlayerStats();
          }
          console.log(advancedPlayers);
          setPlayerTable(players.map((row, i) =>
              <tr onClick={showAdvancedPlayer(row.id)}>
                <td>{row.nimi}</td>
                <td>{row.pelatutlkm}</td>
                <td>{row.voitotlkm}</td>
              </tr>,
          ));
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

  /**
   * Etsii tietyn pelaajan statistiikat.
   * @param id
   */

  const getPlayerStats = () => {
    console.log('getPlayerStats()');
    console.log('Number of players: ' + players.length);
    for (let i = 0; i < players.length; i++) {
      console.log('ID on: ' + i);
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
          json = JSON.parse(xmlhttp.responseText);
          if (json.numOfRows > 0) { // something found
            tuloksetJSON = JSON.parse(xmlhttp.responseText);
            for (let j in tuloksetJSON.rows) {

              let heitotlkm = (tuloksetJSON.rows[j].p0 +
                  tuloksetJSON.rows[j].p1 + tuloksetJSON.rows[j].p2 +
                  tuloksetJSON.rows[j].p3 + tuloksetJSON.rows[j].p4 +
                  tuloksetJSON.rows[j].p5 +
                  tuloksetJSON.rows[j].p6 + tuloksetJSON.rows[j].p7 +
                  tuloksetJSON.rows[j].p8 + tuloksetJSON.rows[j].p9 +
                  tuloksetJSON.rows[j].p10 + tuloksetJSON.rows[j].p11 +
                  tuloksetJSON.rows[j].p12);

              let voittoprosentti = (tuloksetJSON.rows[j].voitotlkm /
                  tuloksetJSON.rows[j].pelatutlkm) * 100;
              let osumatarkkuus = ((tuloksetJSON.rows[j].p1 +
                      tuloksetJSON.rows[j].p2 + tuloksetJSON.rows[j].p3 +
                      tuloksetJSON.rows[j].p4 + tuloksetJSON.rows[j].p5 +
                      tuloksetJSON.rows[j].p6 + tuloksetJSON.rows[j].p7 +
                      tuloksetJSON.rows[j].p8 + tuloksetJSON.rows[j].p9 +
                      tuloksetJSON.rows[j].p10 + tuloksetJSON.rows[j].p11 +
                      tuloksetJSON.rows[j].p12) /
                  (tuloksetJSON.rows[j].p0 + tuloksetJSON.rows[j].p1 +
                      tuloksetJSON.rows[j].p2 + tuloksetJSON.rows[j].p3 +
                      tuloksetJSON.rows[j].p4 + tuloksetJSON.rows[j].p5 +
                      tuloksetJSON.rows[j].p6 + tuloksetJSON.rows[j].p7 +
                      tuloksetJSON.rows[j].p8 + tuloksetJSON.rows[j].p9 +
                      tuloksetJSON.rows[j].p10 + tuloksetJSON.rows[j].p11 +
                      tuloksetJSON.rows[j].p12)) * 100;

              let pistekeskiarvo = (tuloksetJSON.rows[j].p0 +
                  tuloksetJSON.rows[j].p1 + tuloksetJSON.rows[j].p2 * 2 +
                  tuloksetJSON.rows[j].p3 * 3 + tuloksetJSON.rows[j].p4 * 4 +
                  tuloksetJSON.rows[j].p5 * 5 +
                  tuloksetJSON.rows[j].p6 * 6 + tuloksetJSON.rows[j].p7 * 7 +
                  tuloksetJSON.rows[j].p8 * 8 + tuloksetJSON.rows[j].p9 * 9 +
                  tuloksetJSON.rows[j].p10 * 10 + tuloksetJSON.rows[j].p11 *
                  11 +
                  tuloksetJSON.rows[j].p12 * 12) / heitotlkm;

              advancedPlayer = {
                nimi: tuloksetJSON.rows[j].nimi,
                pelatutlkm: tuloksetJSON.rows[j].pelatutlkm,
                voitotlkm: tuloksetJSON.rows[j].voitotlkm,
                voittoprosentti: voittoprosentti.toFixed(1) + '%',
                heitotlkm: heitotlkm,
                osumatarkkuus: osumatarkkuus.toFixed(1) + '%',
                pistekeskiarvo: pistekeskiarvo.toFixed(1) + 'p',
              };
              advancedPlayers.push(advancedPlayer); //ehkä tarvitaan, ehkä ei :O
              console.log(advancedPlayers);
              uusArray = advancedPlayers
            }
          } else {
            alert('Pelaajan statistiikkoja ei löydy!');
          }
        }
      };
      console.log(i);
      xmlhttp.open('GET',
          'https://rocky-cliffs-72708.herokuapp.com/api/player?group=' +
          localStorage.getItem('group') + '&player=' + json.rows[i].nimi, true);
      xmlhttp.send();
    }
  };
  const showAdvancedPlayer = (playerId) => {
    setAdvancedPlayerTable(
        <tr>
          <td>{advancedPlayers[playerId]['nimi']}</td>
          <td>{advancedPlayers[playerId].pelatutlkm}</td>
          <td>{advancedPlayers[playerId].voitotlkm}</td>
          <td>{advancedPlayers[playerId].voittoprosentti}</td>
          <td>{advancedPlayers[playerId].heitotlkm}</td>
          <td>{advancedPlayers[playerId].osumatarkkuus}</td>
          <td>{advancedPlayers[playerId].pistekeskiarvo}</td>
        </tr>,
    );
    setModalShow(true)
  };
  useEffect(() => {
    getPlayers();

    console.log('moi');

  }, []);

  function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Pelaajan tiedot
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped borderless className="modalTable">
              <tr className="modalRow">
                <th>Nimi:</th>
                <th>Ottelut:</th>
                <th>Voitot:</th>
                <th>Voittoprosentti:</th>
                <th>Heitot:</th>
                <th>Osumatarkkuus:</th>
                <th>Pistekeskiarvo:</th>
              </tr>

              <tbody className="modalBody">
              {AdvancedPlayerTable}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide} size="lg">Sulje</Button>
          </Modal.Footer>
        </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
      <div>
        <div>
          <h2>Ryhmän Statistiikka</h2>
          <h3>Klikkaa pelaajan nimeä</h3>
        </div>
        <Table striped>
          <thead>
          <tr>
            <th>Nimi</th>
            <th>Ottelut</th>
            <th>Voitot</th>
          </tr>
          </thead>
          <tbody>
          {playerTable}
          </tbody>
        </Table>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <div className="backToMenu">
          <Button onClick={handleMenu} size="lg">Takaisin</Button>
        </div>
      </div>
  );

};
export default Statistics;