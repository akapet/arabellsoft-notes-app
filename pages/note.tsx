import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { Note as NoteData } from '../data/Note';

function Note(props) {
  const { handleEditNote, note } = props
  
  return (
    <Card fluid style={{ width: 500, height: 110, cursor: 'pointer', margin: '0.5em' }} onClick={() => handleEditNote(note)}>
      <Card.Content>
        <Card.Header content={getTitle(note)} />
        <Card.Meta content={note.content} />
      </Card.Content>
      <Card.Content extra>
        {getWhenCreated(note)}
      </Card.Content>
    </Card>   
  );

  function getTitle(note: NoteData) {
    if (!!!note) {
      return "";
    }

    const text = note.content;
    const length = _.size(text);
    const maxTitleLength = 40;

    const ending = length > maxTitleLength ? "..." : "";

    if (!!text) {
      return text.substring(0, maxTitleLength) + ending;
    }

    return text;
  }

  function getWhenCreated(note: NoteData) {
    if (!!!note) {
      return "";
    }   

    return `Created ${moment(note.whenCreated).fromNow()}`;
  }
}

Note.propTypes = {
  note: PropTypes.instanceOf(NoteData).isRequired,
  handleEditNote: PropTypes.func.isRequired
}

export default Note;
