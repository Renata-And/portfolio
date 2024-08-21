import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
        <SocialList>
          <SocialItem>
            <SocialLink href={'#'}>
              <Icon iconId={'instagram'} width={'48'} height={'49'} viewBox={'0 0 48 49'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={'#'}>
              <Icon iconId={'linkedin'} width={'48'} height={'49'} viewBox={'0 0 48 49'} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href={'#'}>
              <Icon iconId={'email'} width={'48'} height={'49'} viewBox={'0 0 48 49'} />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>Madelyn Torff 2021 </Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  min-height: 30vh;
  border: 1px solid blueviolet;
`

const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  
`

const Copyright = styled.small`
  
`