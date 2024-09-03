import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { FlexWrapper } from '../../../components/FlexWrapper.styled'
import { Workplace } from './workplace/Workplace'
import { Container } from '../../../components/Container.styled'
import { theme } from '../../../styles/Theme'

export const Experience = () => {
  return (
    <StyledExperience>
      <SectionTitle>Experience</SectionTitle>
      <Container>
        <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
          <Workplace year={2022} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
          <Workplace year={2023} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
          <Workplace year={2024} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
        </FlexWrapper>
      </Container>
    </StyledExperience>
  )
}

const StyledExperience = styled.section`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
      gap: 30px;
    }
  }

  ${FlexWrapper}:first-child {
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 67%;
      height: 5px;
      background-color: ${theme.colors.accent};
      position: absolute;
      left: 50%;
      top: 53px;
      transform: translateX(-50%);

      @media ${theme.media.tablet} {
        display: none;
      }
    }
  }

`