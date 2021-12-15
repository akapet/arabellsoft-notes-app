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
  <Home />
);
export default Index;
