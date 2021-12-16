import React, { useState } from 'react';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '../data/Note';
import moment from 'moment';

function CreateNote(props) {
  const { open, setOpen, saveNote } = props;
  const [note, setNote] = useState("");

  return (
    <Modal
      dimmer={true}
      open={open}
      onClose={() => setOpen(false)}
      size={'tiny'}
    >
      <Modal.Header>Create Note</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            control={TextArea}
            placeholder='Type your note here...'
            onChange={handleTextChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button positive onClick={() => createNote()}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>    
  )

  function handleTextChange(e, { value }) {
    setNote(value);
  }

  function createNote() {
    const newNote = new Note(uuidv4(), note, moment().format());
    saveNote(newNote);
  }
}

CreateNote.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  saveNote: PropTypes.func.isRequired
}

export default CreateNote;
