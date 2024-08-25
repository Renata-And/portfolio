import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper.styled'
// import photo from '../../../assets/images/photo.png'
import { Button } from '../../../components/Button.styled'
import { Container } from '../../../components/Container.styled'
import { theme } from '../../../styles/Theme'
import bgImage from '../../../assets/images/yellow-bg.png'

export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <FlexWrapper direction={'column'} justify={'center'} maxWidth={'530px'}>
          <Title>Software Developer</Title>
          <Name>Hello,  my name is Renata Androsova</Name>
          <Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Text>
          <div>
            <Button btnType={'primary'}>Projects</Button>
            <Button as='a' href={'#'} btnType={'outline'}>LinkedIn</Button>
          </div>
          {/* <Image src={photo} /> */}
        </FlexWrapper>
      </Container>
    </StyledHero >
  )
}


const StyledHero = styled.section`
  min-height: 100vh;

  display: flex;

  /* background-image: url(${bgImage}); */
  background-repeat: no-repeat;
  background-position: top right;
  z-index: 1;
  outline: 1px solid blueviolet;
`

// const StyledDiv = styled.div`
//   max-width: 530px;
//   outline: 1px solid blueviolet;
// `

const Title = styled.h1`
  margin-top: 56px;
  margin-bottom: 12px;
  font-size: 20px;
  text-transform: uppercase;
  color: #fdc435;
  outline: 1px solid blueviolet;
`

const Name = styled.h2`
  margin-bottom: 32px;
  font-family: 'Roboto', sans-serif;
  font-size: 64px;
  line-height: 120%;
  color: ${theme.colors.fontTitle};
  outline: 1px solid blueviolet;
`

const Text = styled.p`
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 150%;
  color: ${theme.colors.fontSecondary};
  outline: 1px solid blueviolet;
`

// const Image = styled.img`
//   outline: 1px solid blueviolet;
// `