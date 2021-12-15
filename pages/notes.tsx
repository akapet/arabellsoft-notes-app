import React from 'react';
import { Card, Header, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

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
          _.map(notes, note => {
            return (
              <Card fluid key={note as string}>
                <Card.Content>
                  <Card.Header content={getTitle(note)} />
                  <Card.Meta content={note} />
                </Card.Content>
              </Card>
            );
          })
        }
      </Card.Group> 
    </>    
  );

  function getTitle(text: any) {
    const length = _.size(text);
    const maxTitleLength = 40;

    const ending = length > maxTitleLength ? "..." : "";

    if (!!text) {
      return text.substring(0, maxTitleLength) + ending;
    }

    return text;
  }
}

Notes.propTypes = {
  notes: PropTypes.array,
}

export default Notes;
