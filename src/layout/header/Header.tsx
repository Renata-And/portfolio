import React from 'react'
import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import { Logo } from '../../components/logo/Logo'

const menuItems = [{ itemTitle: 'About', href: '#' }, { itemTitle: 'Projects', href: '#' }, { itemTitle: 'Contacts', href: '#' }];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Name>Renata Androsova</Name>
      <Menu items={menuItems} />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blueviolet;
`

const Name = styled.span`
  
`
