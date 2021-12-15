import styled from 'styled-components';
import { Button, Icon, Segment, Flag } from 'semantic-ui-react';
import Home from './home';


const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin: 10px 0 10px 0;
  }

  .footer {
    padding: 20px;
    border-top: solid 1px #aaa;
  }
`;

const Index = () => (
  <StyledContainer>
    <div>
      <h1>Notes App</h1>
    </div>
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
    <div>
      <Icon name="home" size="big" />
      <Icon name="star" size="big" />
      <Icon name="heart" size="big" />
      <Icon name="ambulance" size="big" />
      <Icon name="lightbulb" size="big" />

      <Segment>
        <Flag name='ae' />
        <Flag name='france' />
        <Flag name='myanmar' />
      </Segment>
    </div>
    <div className="footer">
      <a href="https://github.com/skydiver/nextjs-semantic/">
        https://github.com/skydiver/nextjs-semantic/
      </a>
    </div>
    <Home />
  </StyledContainer>
);
export default Index;
