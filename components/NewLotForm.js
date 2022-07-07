import Router from "next/router";
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const NewLotForm = () => {
  //   const [formSubSuccess, setFormSubSuccess] = useState(null);
  //   const router = Router;

  const lookUpPrefix = (e) => {
    e.preventDefault();
  };

  const handleNewLotSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //     };
    //     const JSONdata = JSON.stringify(data);
    //     console.log(JSONdata);
    //     const endpoint = "https://scrap-tracker.herokuapp.com/api/lot";
    //     const options = {
    //       method: "Post",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSONdata,
    //     };
    //     const response = await fetch(endpoint, options);
    //     const result = await response.json();
    //     setFormSubSuccess(result);
    //     router.push("/");
  };

  return (
    <Form onSubmit={handleNewLotSubmit}>
      <Form.Field>
        <label>New Lot Number</label>
        <input placeholder="part name" onChange={lookUpPrefix} />
      </Form.Field>
      <Form.Field>
        <label>Part Name</label>
        <input placeholder="D6" type="number" step={"0.01"} />
      </Form.Field>
      <Form.Field>
        <label>Single Part Weight</label>
        <input placeholder="Single Part Weight" type="number" step={"0.01"} />
      </Form.Field>
      <Form.Field>
        <label>Total Coil Weight</label>
        <input placeholder="Total Coil Weight" type="number" step={"0.01"} />
      </Form.Field>
      <Form.Field>
        <label>Standard Loss</label>
        <input placeholder="Standard Loss" type="number" step={"0.01"} />
      </Form.Field>
      <Button type="submit" color="green">
        Submit
      </Button>
    </Form>
  );
};

export default NewLotForm;
