import Router from "next/router";
import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";

const NewLotForm = () => {
  const [parts, setParts] = useState([]);
  const [formSubSuccess, setFormSubSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = Router;

  //grab parts list, put in state
  useEffect(() => {
    setLoading(true);
    fetch("https://scrap-tracker.herokuapp.com/api/part")
      .then((res) => res.json())
      .then((data) => {
        setParts(data.data);
        setLoading(false);
      });
  }, []);

  const lookUpPrefix = (e) => {
    e.preventDefault();
  };

  const handleNewLotSubmit = async (e) => {
    e.preventDefault();

    const data = {
      num: e.target[0].value,
      partName: e.target[1].value,
      singlePartWeight: e.target[2].value,
      totalCoilWeight: e.target[3].value,
      lotLoss: e.target[4].value,
      eXt: parseInt(
        ((e.target[3].value - e.target[4].value) / e.target[2].value) * 1000
      ),
    };

    const JSONdata = JSON.stringify(data);

    console.log(JSONdata);

    const endpoint = "https://scrap-tracker.herokuapp.com/api/lot";
    const options = {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
    setFormSubSuccess(result);
    router.push("/");
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
