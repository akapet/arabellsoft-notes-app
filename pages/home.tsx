import React, { useState } from 'react';
import { Button, Icon, Segment, Grid, Header, Modal } from 'semantic-ui-react';
import CreateNote from './create-note';

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Note App
          </Header>
          <Segment placeholder>
            <Header icon>
              <Icon name='tasks' />
              No notes yet. Create note to start.
            </Header>
            <Segment.Inline>
              <Button primary onClick={() => setOpen(true)}>Create Note</Button>
            </Segment.Inline>
          </Segment>
        </Grid.Column>
      </Grid>
      <CreateNote
        open={open}
        setOpen={setOpen}
      />      
    </>    
  )
}

export default Home;
