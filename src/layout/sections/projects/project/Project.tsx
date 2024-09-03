import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { FlexWrapper } from '../../../../components/FlexWrapper.styled'
import { font } from '../../../../styles/Common'

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
      <FlexWrapper justify={'space-between'} align={'center'} direction={props.direction || 'row'} wrap={'wrap-reverse'}>
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
  overflow: hidden;

  & + & {
    margin-top: 80px;
  }

  @media ${theme.media.mobile} {
    & + & {
      margin-top: 50px;
    }
  }
`

const Wrapper = styled.div`
  width: 345px;
  flex-grow: 1;
  padding: 130px 50px;

  @media ${theme.media.mobile} {
    padding-left: 35px;
    padding-right: 27px;
  }
`

const ProjectTitle = styled.h3`
  ${font({ family: '"Playfair Display", sans-serif', lineHeight: 1.5, weight: 700 })}
  font-size: 40px;
  color: ${theme.colors.fontPrimary};
`

const Text = styled.p`
  margin: 25px 0 25px;
`

const Link = styled.a`
  display: inline-block;
  border: 1px solid ${theme.colors.fontPrimary};
  border-radius: 24px;
  padding: 8px 24px;

  ${font({ family: '"Roboto", sans-serif', lineHeight: 1.5, weight: 500 })}
  font-size: 18px;
  color: ${theme.colors.fontPrimary};

  &:hover {
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.accent};
  }
`
const Image = styled.img`
  /* display: inline-block; */
  width: 345px;
  height: 525px;
  object-fit: cover;
  flex-grow: 1;
`
