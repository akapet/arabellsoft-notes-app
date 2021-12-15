import React from 'react';
import { Button, Form, Modal, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function CreateNote(props) {
  const { open, setOpen } = props;

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
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button positive onClick={() => setOpen(false)}>
          Create
        </Button>
      </Modal.Actions>
    </Modal>    
  )
}

CreateNote.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func
}

export default CreateNote;
