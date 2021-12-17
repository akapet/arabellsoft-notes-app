import React, { useEffect } from 'react';
import { Segment, Grid, Header, Icon, SemanticICONS } from 'semantic-ui-react';
import * as R from 'ramda';
import { reactLocalStorage } from 'reactjs-localstorage';
import useState from 'react-usestateref';
import { Note } from '../data/Note';
import CreateNote from './create-note';
import EditNote from './edit-note';
import Notes from './notes';
import CommonButton from '../CommonButton';
import { ArabellsoftPostfix, ArabellsoftPrefix, ClickToEditANoteText, CreateNoteButtonText, ID, NOTES } from '../Constants';

const Mode = {
  list: 'LIST',
  edit: 'EDIT'
}

function Home() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes, notesRef] = useState([] as Note[]);
  const [mode, setMode] = useState(Mode.list);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {    
    const localNotes = reactLocalStorage.get(NOTES);   

    if (!!localNotes) {
      const localNotesObject: Note[] = JSON.parse(localNotes);      
      setNotes(localNotesObject as Note[]);
    } 
  }, []);
  
  return (
    <>
      <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h2' color='green' textAlign='center'>
              Note App
            </Header>            
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row textAlign='center'>
          {inListMode() &&
            <Segment.Inline>
              <CommonButton onClick={() => setOpen(true)} content={CreateNoteButtonText} color="green" />
            </Segment.Inline>
          }
        </Grid.Row>

        <Grid.Row style={{maxWidth: 500}}>
          {renderMode(mode, notes, handleEditNote) }
        </Grid.Row>
        
        <Grid.Row textAlign='center'>
          {!R.isEmpty(notes) &&
            <span style={{ color: 'grey' }}>{ClickToEditANoteText}</span>
          }
        </Grid.Row>        

        <Grid.Row textAlign='center'>
          {ArabellsoftPrefix} <Icon name={"heart" as SemanticICONS} color="red" /> 
          <span>{ArabellsoftPostfix}</span>
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
    saveNotesToLocalStorage();
    setOpen(false);
  }

  function saveNotesToLocalStorage() {
    const notesString = JSON.stringify(notesRef.current);
    
    reactLocalStorage.set(NOTES, notesString);
  }

  function handleDoneEditing(note: Note) { 
    if (!note) {
      // TODO: Perhaps show error or log.
      return;
    }

    const index = R.findIndex(R.propEq(ID, note.id))(notes);

    if (index === -1) {
      // TODO: Perhaps show error or log.
      return;
    }

    const updatedNotes = R.update(index, note, notes); 
    setNotes(updatedNotes);
    saveNotesToLocalStorage();
    setMode(Mode.list);
  }

  function handleDeleteNote(note: Note) {
    if (!note) {
      // TODO: Perhaps show error or log.
      return;
    }

    const index = R.findIndex(R.propEq(ID, note.id))(notes);

    if (index === -1) {
      // TODO: Perhaps show error or log.
      return;
    }

    const updatedNotes = R.remove(index, 1, notes);
    setNotes(updatedNotes);
    saveNotesToLocalStorage();
    setMode(Mode.list);
  }
}

export default Home;
