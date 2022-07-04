import React from "react";
import { Table, Header, Icon } from "semantic-ui-react";

const ActiveLotTable = () => {
  return (
    <div style={{ marginTop: "5em" }}>
      <div>
        <Header as="h1">Current Lots</Header>
      </div>
      <Table basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lot #</Table.HeaderCell>
            <Table.HeaderCell>100%</Table.HeaderCell>
            <Table.HeaderCell>Forging</Table.HeaderCell>
            <Table.HeaderCell>Pressing</Table.HeaderCell>
            <Table.HeaderCell>Tapping</Table.HeaderCell>
            <Table.HeaderCell>VS / Pack</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>123456</Table.Cell>
            <Table.Cell>123456</Table.Cell>
            <Table.Cell>123456</Table.Cell>
            <Table.Cell>123456</Table.Cell>
            <Table.Cell>123456</Table.Cell>
            <Table.Cell>123456</Table.Cell>
            <Table.Cell>
              <Icon bordered name="eye" size="large" />
              <Icon bordered name="edit" size="large" />
              <Icon bordered name="archive" size="large" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default ActiveLotTable;
