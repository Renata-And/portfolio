import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper.styled'
import { theme } from '../../styles/Theme'
import bgImg from '../../assets/images/footerImg.png'
import { Container } from '../../components/Container.styled'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
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
        <Image src={bgImg} />
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding-bottom: 240px;
  position: relative;
`

const SocialList = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 26px;
`

const SocialItem = styled.li`
  
`

const SocialLink = styled.a`
  display: inline-block;
  color: ${theme.colors.fontPrimary};

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`

const Copyright = styled.small`
  font-size: 16px;
  color: ${theme.colors.fontSecondary};
`

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`