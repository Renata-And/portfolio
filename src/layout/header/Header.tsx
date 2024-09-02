import React from 'react'
import styled from 'styled-components'
import { Menu } from './menu/Menu'
import { Container } from '../../components/Container.styled';
import { FlexWrapper } from '../../components/FlexWrapper.styled';
import { theme } from '../../styles/Theme';
import { Icon } from '../../components/icon/Icon'
import { MobileMenu } from './mobile menu/MobileMenu';

const menuItems = [{ itemTitle: 'About', href: '#' }, { itemTitle: 'Projects', href: '#' }, { itemTitle: 'Experience', href: '#' }, { itemTitle: 'Contacts', href: '#' }];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align={'center'}>
          <Icon iconId={'logo'} width={'50'} height={'50'} viewBox={'0 0 48 48'} />
          <Name>Renata Androsova</Name>
          <Menu items={menuItems} />
          <MobileMenu items={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  svg {
    padding: 5px;
  }
  /* outline: 1px solid blueviolet; */
`

const Name = styled.span`
  margin-left: 10px;
  margin-right: auto;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.fontPrimary};

  z-index: 10;
`
