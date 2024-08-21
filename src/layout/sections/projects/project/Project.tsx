import React from 'react'
import styled from 'styled-components'
import { Button } from '../../../../components/Button'

type ProjectPropsType = {
  title: string
  description: string
  href: string
  src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <div>
        <ProjectTitle>{props.title}</ProjectTitle>
        <Description>{props.description}</Description>
        <Button as='a' href={props.href}>View Project</Button>
      </div>
      <Image src={props.src} />
    </StyledProject>
  )
}

const StyledProject = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid blueviolet;

  div {
    max-width: 410px;
  }
`

const ProjectTitle = styled.h3`
  
`

const Description = styled.p`
  
`

const Image = styled.img`
  max-width: 300px;
  width: 100%;
  height: 400px;
  object-fit: cover;
`
