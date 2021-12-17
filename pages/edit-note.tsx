import React, { useState } from 'react';
import { Card, Form, TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Note } from '../data/Note';
import CommonButton from '../CommonButton';
import { DeleteButtonText, DoneButtonText, EditNoteDeleteButtonTestId, EditNoteDoneButtonTestId, EditNoteTextAreaTestId } from '../Constants';

function EditNote(props) {
  const { note } = props;
  const [editedNote, setEditedNote] = useState(note.content);

  return (
    <Card fluid style={{ width: 500, height: 160, cursor: 'pointer' }}>
      <Card.Content>
        <Form>
          <Form.Field
            control={TextArea}
            onChange={handleTextChange}
            value={editedNote}
            data-testid={EditNoteTextAreaTestId}
          />
        </Form>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>          
          <CommonButton onClick={handleDone} content={DoneButtonText} color={"green"} dataTestId={EditNoteDoneButtonTestId} />
          <CommonButton onClick={handleDelete} content={DeleteButtonText} color={"red"} dataTestId={EditNoteDeleteButtonTestId} />         
        </div>
      </Card.Content>
    </Card>   
  );

  function handleTextChange(e, { value }) {
    setEditedNote(value);
  }

  function handleDone() {
    const { handleDoneEditing } = props;
    const updatedNote = { ...note, content: editedNote };
    handleDoneEditing(updatedNote);
  }

  function handleDelete() {
    const { handleDeleteNote } = props;
    handleDeleteNote(note);
  }
}

EditNote.propTypes = {
  note: PropTypes.instanceOf(Note).isRequired,
  handleDoneEditing: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired,
}

export default EditNote;
