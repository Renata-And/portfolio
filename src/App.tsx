import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { Skills } from './layout/sections/skills/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Hero />
        <Skills />
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  
`