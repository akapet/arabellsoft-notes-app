import React from 'react';
import { Card, Header, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

function Note(props) {
  const { note } = props
  
  return (
    <Card fluid style={{ width: 500, height: 80 }}>
      <Card.Content>
        <Card.Header content={getTitle(note)} />
        <Card.Meta content={note} />
      </Card.Content>
    </Card>   
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

Note.propTypes = {
  note: PropTypes.string,
}

export default Note;
