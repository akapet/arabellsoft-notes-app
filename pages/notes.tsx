import React from 'react';
import { Icon, Segment, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Notes(props) {
  const { notes } = props
  
  return (
    <>
      <Segment placeholder>
        <Header icon>
          <Icon name='tasks' />
          No notes yet. Create note to start.
        </Header>        
      </Segment>     
    </>    
  )
}

Notes.propTypes = {
  notes: PropTypes.array,
}

export default Notes;
