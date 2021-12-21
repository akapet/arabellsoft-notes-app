import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { Note as NoteData } from '../data/Note';
import { CreatedPrefix } from '../Constants';

const MAXIMUM_TITLE_COUNT = 40;
const MAXIMUM_CONTENT_COUNT = 200;

function Note(props) {
  const { handleEditNote, note } = props
  
  return (
    <Card fluid style={{ width: 500, height: 150, cursor: 'pointer', margin: '0.5em' }} onClick={() => handleEditNote(note)}>
      <Card.Content>
        <Card.Header content={getTitle(note, MAXIMUM_TITLE_COUNT)} />
        <Card.Meta content={getTitle(note, MAXIMUM_CONTENT_COUNT)} />
      </Card.Content>
      <Card.Content extra>
        {getWhenCreated(note)}
      </Card.Content>
    </Card>   
  );

  function getTitle(note: NoteData, maximum: number) {
    if (!!!note) {
      return "";
    }

    const text = note.content;
    const length = _.size(text);
    const maxTitleLength = maximum;

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

    return `${CreatedPrefix} ${moment(note.whenCreated).fromNow()}`;
  }
}

Note.propTypes = {
  note: PropTypes.object.isRequired,
  handleEditNote: PropTypes.func.isRequired
}

export default Note;
