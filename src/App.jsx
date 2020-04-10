import React from "react";
import { useSelector } from "react-redux";
import Greeting from "./Greeting";
import { Grommet, Box, Main, Heading } from "grommet";
import { grommet } from "grommet/themes";

const App = () => {
  const topBox = useSelector((state) => state.seeTopBox);
  return (
    <>
      <Grommet full theme={grommet}>
        <Main fill align="center">
          <Greeting />
          {topBox && (
            <Box basis="small" background="dark-3">
              <Heading>YES BOX</Heading>
            </Box>
          )}
        </Main>
      </Grommet>
    </>
  );
};

export default App;
