import {Form, FormText} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React from 'react';
import {useHistory} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

const Statistics = () => {
  const history = useHistory();
  const handleMenu = () => {
    history.push('/menu')
  }

    return(
        <div>
          <div>
            <h1>Ryhmän Statistiikka</h1>
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
          <tr>
            <td>Kaho</td>
            <td>4</td>
            <td>1</td>
          </tr>
          </tbody>
        </Table>
          <div className="backToMenu">
          <Button onClick={handleMenu} size="lg">Takaisin</Button>
          </div>
        </div>
    );

};
export default Statistics;