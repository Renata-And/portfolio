import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Hero />
        <Skills />
        <Projects />
      </Main>
    </div>
  );
}

export default App;

const Main = styled.main`
  
`