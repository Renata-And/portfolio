import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { FlexWrapper } from '../../../../components/FlexWrapper.styled'

type ProjectPropsType = {
  title: string
  description: string
  href: string
  src: string
  direction?: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper justify={'space-between'} align={'center'} direction={props.direction || 'row'}>
        <Wrapper>
          <ProjectTitle>{props.title}</ProjectTitle>
          <Text>{props.description}</Text>
          <Link>View Project</Link>
        </Wrapper>
        <Image src={props.src} />
      </FlexWrapper>
    </StyledProject>
  )
}

const StyledProject = styled.div`
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
  border-radius: 24px;
  /* outline: 1px solid blueviolet; */
  overflow: hidden;

  & + & {
    margin-top: 80px;
  }
`

const Wrapper = styled.div`
  width: 50%;
  padding: 0 50px;
`

const ProjectTitle = styled.h3`
  font-family: "Playfair Display", sans-serif;
  font-size: 40px;
  line-height: 150%;
  color: ${theme.colors.fontPrimary};
`

const Text = styled.p`
  margin-top: 25px;
  margin-bottom: 25px;
`

const Link = styled.a`
  display: inline-block;
  border: 1px solid ${theme.colors.fontPrimary};
  border-radius: 24px;
  padding: 8px 24px;

  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${theme.colors.fontPrimary};

  &:hover {
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.accent};
  }
`
const Image = styled.img`
  display: inline-block;
  width: 50%;
  height: 526px;
  object-fit: cover;
`
