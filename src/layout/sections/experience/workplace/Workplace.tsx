import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

type WorkplacePropsType = {
  year: number
  text: string
}

export const Workplace = (props: WorkplacePropsType) => {
  return (
    <StyledWorkplace>
      <YearWrapper><Year>{props.year}</Year></YearWrapper>
      <Text>{props.text}</Text>
    </StyledWorkplace>
  )
}

const StyledWorkplace = styled.div`
  flex-grow: 1;
  width: 200px;
  padding: 0 15px;
  text-align: center;

  @media ${theme.media.tablet} {
    width: 345px;
    padding: 0;
  }
`

const Year = styled.span`
  display: inline-block;
  margin-bottom: 40px;

  font-family: "Playfair Display", sans-serif;
  font-weight: bold;
  font-size: 24px;

  position: relative;
`

const YearWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${theme.colors.fontTitle};
    border-radius: 50%;

    position: absolute;
    left: 50%;
    top: 76%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

`

const Text = styled.p`

`