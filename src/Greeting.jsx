import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Heading, Button } from "grommet";
import { GET_BOX } from "./state/actions/actionTypes";

const Greeting = (props) => {
  const dispatch = useDispatch();
  let [greeting, setGreeting] = useState("Hello World");
  let [isClicked, setIsClicked] = useState(false);
  let [buttonLabel, setButtonLabel] = useState("Wanna see a box?");

  const buttonClick = () => {
    if (greeting === "Hello World") {
      setGreeting("NEW HELLO");
    } else {
      setGreeting("Hello World");
    }
  };

  const buttonClickTwo = () => {
    if (isClicked === false) {
      setIsClicked(true);
      setButtonLabel("Tired of the box?");
      dispatch({ type: GET_BOX, payload: { seeTopBox: true } });
    } else {
      setIsClicked(false);
      setButtonLabel("Wanna see a box again?");
      dispatch({ type: GET_BOX, payload: { seeTopBox: false } });
    }
  };

  return (
    <>
      <Heading>{greeting}</Heading>
      <Button label="Change Greetin plz" onClick={buttonClick} />
      <Button margin="small" label={buttonLabel} onClick={buttonClickTwo} />
    </>
  );
};

export default Greeting;
