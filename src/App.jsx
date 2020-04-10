import React from "react";
import Greeting from "./Greeting";
import { Grommet, Main } from "grommet";
import { grommet } from "grommet/themes";
import TopBox from "./TopBox";

const App = () => {
  return (
    <>
      <Grommet full theme={grommet}>
        <Main fill align="center">
          <Greeting />
          <TopBox />
        </Main>
      </Grommet>
    </>
  );
};

export default App;
