import React, {useState} from 'react';
import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"


const Login = () => {

  /**
   * @author Henrik Aho, Onni Lukkarila
   */

  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [validated, setValidated] = useState(false);
  let json;

  /**
   * Hankkii ryhmän tunnukset tietokannasta.
   */
  function getGroup() {
    let group = document.getElementById("group").value;
    let password = document.getElementById("password").value;
    if (group.length == 0 || password.length == 0) {
      alert('Täytä molemmat kentät!');
      return;
    } else {
      let xmlhttp = new XMLHttpRequest();
      console.log("testiä");
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          json = JSON.parse(xmlhttp.responseText);
          if (json.numOfRows > 0){ // something found
            setGroup(json);
            console.log("Ryhmä haettu: " + json.nimi);
          }
          else {
            alert("Ryhmää ei löytynyt!");

          }

        }
      };
      xmlhttp.open("GET", "https://rocky-cliffs-72708.herokuapp.com/api/login?group=" + group + "&password=" + password, true);
      xmlhttp.send();
    }
  }

  /**
   * Kirjautuu ryhmän tunnuksilla sisään.
   */
  function setGroup(json) {
    localStorage.setItem("group", json.rows[0].nimi);
    console.log(localStorage.getItem("group"));
  }

  /**
   * Luo uuden ryhmän.
   */
  function newGroup() {
    let group = document.getElementById("group").value;
    let password = document.getElementById("password").value;
    let body;
    if (group.length == 0 || password.length == 0) {
      alert('Täytä molemmat kentät!');
      return;
    }
    else if(textInputCheck(group) === false) {
      alert("Ryhmän nimessä saa olla ainoastaan kirjaimia!");
      return;
    }
    else
    {
      let pwCheck = window.prompt("Vahvista salasana:");
      if(password !== pwCheck){
        alert("Salasana ei täsmää!");
        return;
      }
      else {
        body = { "nimi": group, "salasana": password};
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://rocky-cliffs-72708.herokuapp.com/api/newgroup", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(body));
        localStorage.setItem("group", body.nimi);
        console.log(localStorage.getItem("group"));


      }
    }
  }

  /**
   * Tarkastaa, onko syöte kirjoitettu oikein.
   * @param inputtxt
   * @returns {boolean}
   */
  function textInputCheck(inputtxt)
//Tekstisyötteen tarkistus
  {
    let inputType = /^[A-Za-z0-9äöåÄÖÅ]+$/;
    if(inputtxt.match(inputType))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setNewPassword(event.target.value);
  };

  return(
      <Form noValidate validated={validated} onSubmit={getGroup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" value={newEmail} onChange={handleEmailChange} required/>
          <Form.Control.Feedback type="invalid">Please enter a valid email!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" value={newPassword} onChange={handlePasswordChange} required/>
          <Form.Control.Feedback type="invalid">Please enter a valid password!</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  )
};

export default Login