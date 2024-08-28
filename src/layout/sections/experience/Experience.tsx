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
        <FlexWrapper justify={'space-around'} align={'center'}>
          <Workplace year={2022} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
          <Workplace year={2023} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
          <Workplace year={2024} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
        </FlexWrapper>
      </Container>
    </StyledExperience>
  )
}

const StyledExperience = styled.section`
  /* outline: 1px solid blueviolet; */

  ${FlexWrapper} {
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: 67%;
      height: 5px;
      background-color: ${theme.colors.accent};
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translateX(-50%);
      }
  }
`