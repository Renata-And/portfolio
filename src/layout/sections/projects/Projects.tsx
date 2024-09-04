import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle.styled';
import { Project } from './project/Project';
import { Container } from '../../../components/Container.styled';
import imgProj1 from '../../../assets/images/projects/proj1.jpg';
import imgProj2 from '../../../assets/images/projects/project2.jpeg';
import imgProj3 from '../../../assets/images/projects/project3.jpeg';
import { S } from './Projects_Styles';

const projectsData = [
  { title: 'Project Name', description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.', href: '#', src: imgProj1 },
  { title: 'Project Name', description: 'What was your role, your deliverables, if the project was personal, freelancing.', href: '#', src: imgProj2 },
  { title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', href: '#', src: imgProj3 },
];

export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>

        {projectsData.map((p, i) => {
          return (
            <Project key={i}
              title={p.title}
              description={p.description}
              href={p.href}
              src={p.src} />
          )
        })}

      </Container>
    </S.Projects>
  )
}

