import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Heading, Button, Form, TextInput} from "grommet";
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

  const changeByInput = (event) => {
    setGreeting(event.target.greeting.value)
  };

  return (
    <>
      <Heading>{greeting}</Heading>
      <Button label="Change Greetin plz" onClick={buttonClick} />
      <Button margin="small" label={buttonLabel} onClick={buttonClickTwo} />
      <Form onSubmit={changeByInput}>
      <TextInput id="greeting" name="greeting" placeholder="greeting" />
        <Button label="CHANGE IT" type="submit" />
      </Form>
    </>
  );
};

export default Greeting;
