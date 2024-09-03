import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper.styled'
import { Button } from '../../../components/Button.styled'
import { Container } from '../../../components/Container.styled'
import { theme } from '../../../styles/Theme'
import bgImage from '../../../assets/images/yellow-bg.png'
import photo from '../../../assets/images/photo.png'
import { font } from '../../../styles/Common'


export const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <FlexWrapper justify={'space-between'} align={'flex-start'} gap={'10px'}>
          <DescriptionWrapper>
            <Title>Software Developer</Title>
            <Name>Hello,  my name is Renata Androsova</Name>
            <Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</Text>
            <div>
              <Button btnType={'primary'}>Projects</Button>
              <Button as='a' href={'#'} btnType={'outline'}>LinkedIn</Button>
            </div>
          </DescriptionWrapper>
          <ImageWrapper>
            {/* <Image src={bgImage} /> */}
            <Photo src={photo} />
          </ImageWrapper>
        </FlexWrapper>
      </Container>
    </StyledHero >
  )
}


const StyledHero = styled.section`
  position: relative;
  z-index: 0;
  overflow-x: clip;

  div > div {
    @media ${theme.media.mobile} {
      flex-wrap: wrap-reverse;
    }
  }
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 1.5;
  max-width: 530px;

  @media ${theme.media.tablet} {
    max-width: 420px;
  }
`

const Title = styled.h1`
  margin-top: 56px;
  margin-bottom: 12px;
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.accent};
`

const Name = styled.h2`
  margin-bottom: 32px;
  ${font({ family: '"Roboto", sans-serif', Fmax: 64, Fmin: 42, weight: 700 })}
  color: ${theme.colors.fontTitle};
`

const Text = styled.p`
  font-size: 24px;
  margin-bottom: 32px;
`

// Закоммиченные свойства для размешения фона через тег img

const ImageWrapper = styled.div`
  /* position: relative; */
  flex-grow: 1;
  max-width: 720px;
  width: 100%;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: contain;

  margin-top: -50px;
  margin-right: -120px;
`
// const Image = styled.img`
//   position: absolute;
//   top: -50px;
//   right: -15px;
// `

const Photo = styled.img`
  /* position: relative;
  top: -50px;
  right: -15px; */
  mask-image: url(${bgImage});
  mask-size: cover;
  mask-position: center;

  max-width: 720px;
  width: 100%;
  object-fit: cover;
`


