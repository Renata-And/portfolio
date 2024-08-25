import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { FlexWrapper } from '../../../components/FlexWrapper.styled'
import { Workplace } from './workplace/Workplace'

export const Experience = () => {
  return (
    <StyledExperience>
      <SectionTitle>Experience</SectionTitle>
      <FlexWrapper justify={'space-around'} align={'center'}>
        <Workplace year={2022} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
        <Workplace year={2023} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
        <Workplace year={2024} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'} />
      </FlexWrapper>
    </StyledExperience>
  )
}

const StyledExperience = styled.section`
  min-height: 50vh;
  outline: 1px solid blueviolet;
`