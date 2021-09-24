import './App.css';
import styled from "styled-components";
import Intro from './slides/intro';
import Calculator from './slides/calculator.js';
import Fizzbuzz from './slides/fizzbuzz.js';
import Roman from './slides/roman.js';
import Hardest from './slides/hardest';
import Conclusion from './slides/conclusion';

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Intro />
        <Calculator />
        <Fizzbuzz />
        <Roman />
        <Hardest />
        <Conclusion />
      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
    color: white;
`;

export default App;
