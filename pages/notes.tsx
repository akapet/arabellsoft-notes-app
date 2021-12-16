import React from 'react';
import { Card, Header, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import Note from './note';
import { Note as NoteData } from '../data/Note';

function Notes(props) {
  const { notes, handleEditNote } = props
  
  return (
    <>
      {_.isEmpty(notes) &&
        <Segment placeholder>
          <Header icon>
            <Icon name={'sticky note outline' as SemanticICONS} />
            No notes yet. Create note to start.
          </Header>
        </Segment>
      }

      <Card.Group>
        {
          _.map(notes, (note: NoteData) => {
            return (
              <Note note={note} key={note.id} handleEditNote={handleEditNote} />
            );
          })
        }
      </Card.Group> 
    </>    
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.instanceOf(NoteData)
  ),
  handleEditNote: PropTypes.func.isRequired
}

export default Notes;
