import React from 'react'
import styled from 'styled-components'
import { Menu } from '../../components/menu/Menu'
import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container.styled';
import { FlexWrapper } from '../../components/FlexWrapper.styled';
import { theme } from '../../styles/Theme';

const menuItems = [{ itemTitle: 'About', href: '#' }, { itemTitle: 'Projects', href: '#' }, { itemTitle: 'Experience', href: '#' }, { itemTitle: 'Contacts', href: '#' }];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align={'center'}>
          <Logo />
          <Name>Renata Androsova</Name>
          <Menu items={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  outline: 1px solid blueviolet;
`

const Name = styled.span`
  margin-left: 15px;
  margin-right: auto;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.fontPrimary};
`
