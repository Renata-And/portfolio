import styled from 'styled-components';
import { theme } from '../../../styles/Theme'
import bgImage from '../../../assets/images/yellow-bg.png'
import { font } from '../../../styles/Common'


const Hero = styled.section`
  position: relative;
  z-index: 0;
  overflow-x: clip;

  a + a {
    margin-left: 12px;
  }

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
  flex-shrink: 1.3;
  max-width: 550px;

  @media ${theme.media.tablet} {
    max-width: 430px;
  }
`

const Title = styled.h1`
  margin-top: 60px;
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
  margin-bottom: 35px;
`

const ImageWrapper = styled.div`
  flex-grow: 1;
  max-width: 720px;
  width: 100%;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: contain;

  margin-top: -50px;
  margin-right: -120px;
`

const Photo = styled.img`
  mask-image: url(${bgImage});
  mask-size: cover;
  mask-position: center;

  max-width: 720px;
  width: 100%;
  object-fit: cover;
`

export const S = {
  Hero,
  DescriptionWrapper,
  Title,
  Name,
  Text,
  ImageWrapper,
  Photo
}


