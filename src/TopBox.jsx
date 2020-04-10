import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Heading, Button } from "grommet";
import { ALERT } from "./state/actions/actionTypes";
import initialState from "./state/store/initialState";

const TopBox = () => {
  const [boxMessage, setBoxMessage] = useState(initialState.boxMessage);
  const topBox = useSelector((state) => state.seeTopBox);
  const showBoxResetter = useSelector(state => state.showBoxResetter)
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const dispatch = useDispatch();

  const alertUser = () => {
    dispatch({ type: ALERT, payload: { backgroundColor: "red", showBoxResetter: true } });
    alert("Who do you think you are ahhahahah");
    setBoxMessage("Stupid Fuck!");

  };

  const resetBox = () => {
    setBoxMessage(initialState.boxMessage);
    dispatch({ type: ALERT, payload: { backgroundColor: "pink", showBoxResetter: false} });
  };

  return (
    <>
      {topBox && (
          <Box basis="small" background={backgroundColor} round="small">
            <Heading color="white">{boxMessage}</Heading>
            <Button color="white" label="Get $1m cash" onClick={alertUser} />
          </Box>
      )}
      {showBoxResetter && <Button label="Reset Box" onClick={resetBox} />}
    </>
  );
};

export default TopBox;
