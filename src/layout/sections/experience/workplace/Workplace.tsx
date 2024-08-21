import React from 'react'
import styled from 'styled-components'

type WorkplacePropsType = {
  year: number
  text: string
}

export const Workplace = (props: WorkplacePropsType) => {
  return (
    <StyledWorkplace>
      <Year>{props.year}</Year>
      <Text>{props.text}</Text>
    </StyledWorkplace>
  )
}

const StyledWorkplace = styled.div`
  max-width: 30%;
  border: 1px solid blueviolet;
`

const Year = styled.span`
  
`

const Text = styled.p`
`