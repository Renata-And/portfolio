import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <StyledLink href={'#'}>
      <Icon iconId={'logo'} />
    </StyledLink>
  )
}

const StyledLink = styled.a`
  svg {
    vertical-align: middle;
  }
`