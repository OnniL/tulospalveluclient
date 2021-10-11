import {Form, FormText, Table, Button, Modal} from 'react-bootstrap';
import '../Styles.css';
import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const Statistics = () => {
  const history = useHistory();
  const h2 = useRef();
  const h3 = useRef();
  const handleMenu = () => {
    history.push('/menu')


  }

  /**
   * Checks the current mode and makes changes if necessary
   */
  useEffect(() => {
    if(localStorage.getItem("mode") === "dark"){
      document.body.style.backgroundImage = "url('./images/darkmode.jpg')";
      h2.current.style.color = "white";
      h3.current.style.color = "white";
    }
    else {
      document.body.style.backgroundImage = "url('./images/taustakuva.jpg')";
      h2.current.style.color = "black";
      h3.current.style.color = "black";
    }
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
              <tbody>
              <tr>
                <th>Nimi:</th>
                <td></td>
              </tr>
              <tr>
                <th>Ottelut:</th>
                <td></td>
              </tr>
              <tr>
                <th>Voitot:</th>
                <td></td>
              </tr>
              <tr>
                <th>Voittoprosentti:</th>
                <td></td>
              </tr>
              <tr>
                <th>Heitot:</th>
                <td></td>
              </tr>
              <tr>
                <th>Osumatarkkuus:</th>
                <td></td>
              </tr>
              <tr>
                <th>Pistekeskiarvo:</th>
                <td></td>
              </tr>
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

    return(
        <div>
          <div>
            <h2 ref={h2}>Ryhmän Statistiikka</h2>
            <h3 ref={h3}>Klikkaa pelaajan nimeä</h3>
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
          <tr onClick={() => setModalShow(true)}>
            <td>Kaho</td>
            <td>4</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Teme</td>
            <td>3</td>
            <td>0</td>
          </tr>
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