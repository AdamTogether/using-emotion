import React from 'react';
import styled from '@emotion/styled/macro';

const Child = styled.div`
  color: tomato;
`;

const Parent = styled.div`
  ${Child} {
    color: springgreen;
  }
`;

const Button = styled.button`
  color: ${props => props.secondary ? 'royalblue' : 'snow'};
  background-color: ${props => props.secondary ? 'whitesmoke' : 'royalblue'};
  border: 2px solid royalblue;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
   background-color: ${props => props.secondary ? 'gainsboro' : 'dodgerblue'};
  }
  @media (max-width: 768px) {
    font-size: 32px;
    &:hover {
      background-color: forestgreen;
    }
  }
`;

const TitleHeader = styled.h1`
  background-color: lavenderblush;
  color: mediumvioletred;
  margin: 0;
  padding: 10px;
`;

function App() {
  return (
    <div>
      <TitleHeader>What a boring app...</TitleHeader>
      <TitleHeader>Second title header</TitleHeader>
      <Button>Primary button</Button>
      <Button secondary>Secondary button</Button>

      <Parent>
        <Child>Color is springgreen</Child>
      </Parent>
      <Child>Color is tomato</Child>
    </div>
  );
}

export default App;
