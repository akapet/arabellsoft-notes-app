import React, { useState } from 'react';
import { Button, Segment, Grid, Header } from 'semantic-ui-react';
import * as R from 'ramda';
import _ from 'ramda';
import { Note } from '../data/Note';
import CreateNote from './create-note';
import EditNote from './edit-note';
import Notes from './notes';
import CommonButton from '../CommonButton';

const Mode = {
  list: 'LIST',
  edit: 'EDIT'
}

function Home() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([] as Note[]);
  const [mode, setMode] = useState(Mode.list);
  const [currentNote, setCurrentNote] = useState(null);

  return (
    <>
      <Grid textAlign='center' style={{ height: '60vh' }} verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' color='green' textAlign='center'>
              Note App
            </Header>            
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{maxWidth: 500}}>
          {renderMode(mode, notes, handleEditNote) }
        </Grid.Row>
        
        <Grid.Row textAlign='center'>
          {inListMode() &&
            <Segment.Inline>
              <CommonButton onClick={() => setOpen(true)} content="Create Note" color="green" />
            </Segment.Inline>
          }
        </Grid.Row>
      </Grid>
      
      <CreateNote
        open={open}
        setOpen={setOpen}
        saveNote={saveAndCloseCreateNote}
      />           
    </>    
  )

  function renderMode(mode: string, notes: Note[], handleEditNote: { (note: Note): void; (...args: any[]): any; }) {
    switch (mode) {
      case Mode.edit:
        return (
          <EditNote
            note={currentNote}
            handleDoneEditing={handleDoneEditing}
            handleDeleteNote={handleDeleteNote}
          />
        );        
      default:
        return (
          <Notes
            notes={notes}
            handleEditNote={handleEditNote}
          />
        );
    }
  }

  function inListMode() {
    return mode !== Mode.edit;
  }

  function handleEditNote(note: Note) {
    setCurrentNote(note);
    setMode(Mode.edit);
  }

  function saveAndCloseCreateNote(note: Note) {  
    const newNotes = R.append(note, notes);  
    setNotes(newNotes);
    setOpen(false);
  }

  function handleDoneEditing(note: Note) { 
    if (!note) {
      // TODO: Perhaps show error or log.
      return;
    }

    const index = R.findIndex(R.propEq('id', note.id))(notes);

    if (index === -1) {
      // TODO: Perhaps show error or log.
      return;
    }

    const updatedNotes = R.update(index, note, notes); 
    setNotes(updatedNotes);
    setMode(Mode.list);
  }

  function handleDeleteNote(note: Note) {
    if (!note) {
      // TODO: Perhaps show error or log.
      return;
    }

    const index = R.findIndex(R.propEq('id', note.id))(notes);

    if (index === -1) {
      // TODO: Perhaps show error or log.
      return;
    }

    const updatedNotes = R.remove(index, 1, notes);
    setNotes(updatedNotes);
    setMode(Mode.list);
  }
}

export default Home;
