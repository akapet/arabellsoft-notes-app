import React, { useState } from 'react';
import { Button, Card, Form, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';

function EditNote(props) {
  const { note } = props
  const [editedNote, setEditedNote] = useState("");

  return (
    <Card fluid style={{ width: 500, height: 160, cursor: 'pointer' }}>
      <Card.Content>
        <Form>
          <Form.Field
            control={TextArea}
            onChange={handleTextChange}
            value={note}
          />
        </Form>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Done
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>   
  );

  function handleTextChange(e, { value }) {
    setEditedNote(value);
  }
}

EditNote.propTypes = {
  note: PropTypes.string,
  handleDoneEditing: PropTypes.func,
  handleDeleteNote: PropTypes.func,
}

export default EditNote;
