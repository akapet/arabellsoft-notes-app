import React, { useState } from 'react';
import { Form, Modal, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Note } from '../data/Note';
import moment from 'moment';
import CommonButton from '../CommonButton';
import { CreateNoteButtonText, CancelButtonText, CreateButtonText, TextAreaPlaceholder, ModalCreateNoteTestId } from '../Constants';

function CreateNote(props) {
  const { open, setOpen, saveNote } = props;
  const [note, setNote] = useState("");

  return (
    <Modal
      dimmer={true}
      open={open}
      onClose={() => setOpen(false)}
      size={'tiny'}
      centered={false}
    >
      <Modal.Header>{CreateNoteButtonText}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            control={TextArea}
            placeholder={TextAreaPlaceholder}
            onChange={handleTextChange}
            style={{ minHeight: 100, border: 'none', backgroundColor: 'transparent', resize: 'none', outline: 'none' }}
            data-testid={"create-note-textarea"}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <CommonButton 
          onClick={() => setOpen(false)} 
          content={CancelButtonText} 
          negative={true}
          dataTestId="modal-cancel-note"
        />   
        <CommonButton 
          onClick={() => createNote()} 
          content={CreateButtonText} 
          positive={true} 
          disabled={!!!note}
          dataTestId={ModalCreateNoteTestId}
        />         
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
