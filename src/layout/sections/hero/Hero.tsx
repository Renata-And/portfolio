import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import photo from '../../../assets/images/photo.png'
import { Button } from '../../../components/Button'

export const Hero = () => {
  return (
    <StyledHero>
      <FlexWrapper justify={'space-around'} align={'center'}>
        <StyledDiv>
          <Title>Software Developer</Title>
          <Name>Hello,  my name is Renata Androsova</Name>
          <Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Text>
          <Button>Projects</Button>
          <Button as='a' href={'#'}>LinkedIn</Button>
        </StyledDiv>
        <Image src={photo} />
      </FlexWrapper>
    </StyledHero >
  )
}


const StyledHero = styled.section`
  min-height: 100vh;
  border: 1px solid blueviolet;
`

const StyledDiv = styled.div`
  border: 1px solid blueviolet;
`

const Title = styled.h1`
  color: #FDC435;
  border: 1px solid blueviolet;
`

const Name = styled.h2`
  border: 1px solid blueviolet;
`
const Text = styled.p`
  max-width: 500px;
  border: 1px solid blueviolet;
`
const Image = styled.img`
  border: 1px solid blueviolet;
`