import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { Project } from './project/Project'
import { Container } from '../../../components/Container.styled'
import imgProj1 from '../../../assets/images/projects/project1.jpeg'
import imgProj2 from '../../../assets/images/projects/project2.jpeg'
import imgProj3 from '../../../assets/images/projects/project3.jpeg'

// const projectItems = [
//   { title: 'Project Name', description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.', href: '#', src: { imgProj1 } },
//   { title: 'Project Name', description: 'What was your role, your deliverables, if the project was personal, freelancing.', href: '#', src: { imgProj2 } },
//   { title: 'Project Name', description: 'You can also add in this description the type of the project, if it was for web, mobile, electron.', href: '#', src: { imgProj3 } },
// ];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Project
          title={'Project Name'}
          description={'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.'}
          href={'#'}
          src={imgProj1} />

        <Project
          title={'Project Name'}
          description={'What was your role, your deliverables, if the project was personal, freelancing.'}
          href={'#'}
          src={imgProj2}
          direction={'row-reverse'} />

        <Project
          title={'Project Name'}
          description={'You can also add in this description the type of the project, if it was for web, mobile, electron.'}
          href={'#'}
          src={imgProj3} />
      </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section`
  /* outline: 1px solid blueviolet; */
`
