import React, { useState } from 'react';
import { Button, Segment, Grid, Header } from 'semantic-ui-react';
import CreateNote from './create-note';
import Notes from './notes';

function Home() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Note App
          </Header>
          <Segment basic>
            <Notes notes={notes} />
            <Segment.Inline>
              <Button primary onClick={() => setOpen(true)}>Create Note</Button>
            </Segment.Inline>
          </Segment>
        </Grid.Column>
      </Grid>
      
      <CreateNote
        open={open}
        setOpen={setOpen}
        saveNote={saveAndCloseCreateNote}
      />      
    </>    
  )

  function saveAndCloseCreateNote(note: string) {    
    setNotes(oldNotes => [...oldNotes, note]);
    setOpen(false);
  }
}

export default Home;
