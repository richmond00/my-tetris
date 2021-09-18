import React from 'react';
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>Start</StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;