import {Form, FormText, Table, Button} from 'react-bootstrap';
import '../Styles.css';
import React from 'react';
import {useHistory} from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const Statistics = () => {
  const history = useHistory();
  const handleMenu = () => {
    history.push('/menu')
  }

    return(
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
          <tr>
            <td>Kaho</td>
            <td>4</td>
            <td>1</td>
          </tr>
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