import React from 'react';
import { Card, Header, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import Note from './note';

function Notes(props) {
  const { notes } = props
  
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
          _.map(notes, (note: string) => {
            return (
              <Note note={note} />
            );
          })
        }
      </Card.Group> 
    </>    
  );
}

Notes.propTypes = {
  notes: PropTypes.array,
}

export default Notes;
