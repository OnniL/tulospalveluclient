import {Form, FormText} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import '../Styles.css';
import React, {useRef} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {useHistory} from 'react-router-dom';

/**
 * @author Henrik Aho, Nikke Tikka
 * Settings page
 */

const Settings = () => {
  const history = useHistory();
  const h1 = useRef();
  const h2 = useRef();
  const handleSettings = () => {
    history.push('/menu')
  }
    /**
     * Functions to handle changes of the websites theme based on buttons pressed
     */

    function changeDarkmode() {
        document.body.style.backgroundImage = "url('./images/darkmode.jpg')";
        h1.current.style.color = "white";
        h2.current.style.color = "white";
        localStorage.setItem("mode", "dark");
        console.log(localStorage.getItem("mode"));
    }
    function changeLightmode() {
        document.body.style.backgroundImage = "url('./images/taustakuva.jpg')";
        h1.current.style.color = "black";
        h2.current.style.color = "black";
        localStorage.setItem("mode", "light");
        console.log(localStorage.getItem("mode"));
    }

  return (
      <div>
        <h1 ref={h1}>Asetukset</h1>
        <h2 ref={h2}>Light/Dark Mode</h2>
        <ButtonGroup className="buttonGroup">
          <Button onClick={changeLightmode}>Light</Button>
          <Button onClick={changeDarkmode}>Dark</Button>
          <Button onClick={handleSettings}>Takaisin</Button>
        </ButtonGroup>
      </div>
  );
};

export default Settings;