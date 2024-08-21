import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';


function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Hero />
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  
`