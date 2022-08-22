import Head from 'next/head';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const { Group, Label, Select, Check, Control } = Form;

const AgentSettings = () => {
  return (
    <Form>
      <fieldset>
        <Group className="mb-3">
          <Label htmlFor="disabledTextInput">Disabled input</Label>
          <Control id="disabledTextInput" placeholder="Disabled input" />
        </Group>
        <Group className="mb-3">
          <Label htmlFor="disabledSelect">Disabled select menu</Label>
          <Select id="disabledSelect">
            <option>Disabled select</option>
          </Select>
        </Group>
        <Group className="mb-3">
          <Check type="checkbox" id="disabledFieldsetCheck" label="Can't check this" />
        </Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
};

export default AgentSettings;
