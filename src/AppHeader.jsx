import React from "react";
import { Header, Button, Menu, Heading } from "grommet";

const AppHeader = () => {
  return (
    <Header background="#B19CD9" height={40} gap="small">
      <Button label="Hello" hoverIndicator />
      <Heading alignSelf="center">Bounce App</Heading>
      <Menu label="account" items={[{ label: "logout" }]} />
    </Header>
  );
};

export default AppHeader;
