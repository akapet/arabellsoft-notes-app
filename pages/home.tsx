import React, { useState } from 'react';
import { Button, Segment, Grid, Header } from 'semantic-ui-react';
import CreateNote from './create-note';
import EditNote from './edit-note';
import Notes from './notes';

const Mode = {
  list: 'LIST',
  edit: 'EDIT'
}

function Home() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [mode, setMode] = useState(Mode.list);
  const [noteId, setNoteId] = useState("");

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
          { renderMode(mode, notes, noteId) }
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

  function renderMode(mode, notes, noteId) {
    switch (mode) {
      case Mode.edit:
        return <EditNote note={noteId} />
      default:
        return <Notes notes={notes} />;
    }
  }

  function saveAndCloseCreateNote(note: string) {  
    const newNotes = [...notes, note];  
    setNotes(newNotes);
    setOpen(false);
  }
}

export default Home;
