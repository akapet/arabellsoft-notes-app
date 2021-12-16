import React, { useState } from 'react';
import { Button, Segment, Grid, Header } from 'semantic-ui-react';
import CreateNote from './create-note';
import Notes from './notes';

function Home() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  return (
    <>
      <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' color='teal' textAlign='center'>
              Note App
            </Header>            
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{maxWidth: 500}}>
          <Notes notes={notes} />
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Segment.Inline>
            <Button primary onClick={() => setOpen(true)}>Create Note</Button>
          </Segment.Inline>
        </Grid.Row>
      </Grid>
      
      <CreateNote
        open={open}
        setOpen={setOpen}
        saveNote={saveAndCloseCreateNote}
      />      
    </>    
  )

  function saveAndCloseCreateNote(note: string) {  
    const newNotes = [...notes, note];  
    setNotes(newNotes);
    setOpen(false);
  }
}

export default Home;
