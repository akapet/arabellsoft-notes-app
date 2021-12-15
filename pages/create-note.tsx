import React, { useState } from 'react';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';

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
        <Button positive onClick={() => saveNote(note)}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>    
  )

  function handleTextChange(e, { value }) {
    setNote(value);
  }
}

CreateNote.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  saveNote: PropTypes.func
}

export default CreateNote;
