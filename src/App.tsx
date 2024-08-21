import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Hero } from './layout/sections/hero/Hero';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import { Experience } from './layout/sections/experience/Experience';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Main>
      <Footer />
    </div>
  );
}

export default App;

const Main = styled.main`
  
`