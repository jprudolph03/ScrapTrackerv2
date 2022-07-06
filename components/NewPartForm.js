import React from "react";
import { Form, Button } from "semantic-ui-react";

const NewPartForm = () => {
  const handleNewPartSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleNewPartSubmit}>
      <Form.Field>
        <label>New Part Name</label>
        <input placeholder="part name" />
      </Form.Field>
      <Form.Field>
        <label>Part Prefix</label>
        <input placeholder="part prefix" type="number" step={"0.01"} />
      </Form.Field>
      <Form.Field>
        <label>Coil Loss</label>
        <input placeholder="coil loss" type="number" step={"0.01"} />
      </Form.Field>
      <Button type="submit" color="green">
        Submit
      </Button>
    </Form>
  );
};

export default NewPartForm;
