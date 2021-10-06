import {Form, FormText} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React from 'react';
import {useHistory} from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

/**
 * @author Onni Lukkarila
 */

const Players = () => {

  let json;

  const getPlayers = () => {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        json = JSON.parse(xmlhttp.responseText);
        if (json.numOfRows > 0){ // something found
          // showList(json);
          console.log("Pelaajia löytyi")
        }
        else {
          alert("Pelaajia ei löytynyt!");
        }
      }
    };
    xmlhttp.open("GET", "https://rocky-cliffs-72708.herokuapp.com/api/players?group=" + localStorage.getItem("group"), true);
    console.log("testi1");
    xmlhttp.send();
    console.log("testi2");
  }

}