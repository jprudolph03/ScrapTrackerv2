import React from "react";
import { Header, Icon } from "semantic-ui-react";

const addNewPart = () => {
  return (
    <Header as="h2">
      <Icon name="plus circle" />
      <Header.Content>Add New Part</Header.Content>
      <hr />
    </Header>
  );
};

export default addNewPart;
