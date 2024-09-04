import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper.styled';
import { Container } from '../../components/Container.styled';
import bgImg from '../../assets/images/footerImg.png';
import { S } from './Footer_Styles';

const socialData = [
  {
    iconId: 'instagram',
    href: '#'
  },
  {
    iconId: 'linkedin',
    href: '#'
  },
  {
    iconId: 'email',
    href: '#'
  },
]

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper direction={'column'} align={'center'}>

          <S.SocialList>
            {socialData.map((s, i) => {
              return (
                <li>
                  <S.SocialLink href={s.href}>
                    <Icon iconId={s.iconId} width={'48'} height={'49'} viewBox={'0 0 48 49'} />
                  </S.SocialLink>
                </li>
              )
            })}
          </S.SocialList>

          <S.Copyright>Madelyn Torff 2021 </S.Copyright>

        </FlexWrapper>
        <S.Image src={bgImg} />
      </Container>
    </S.Footer>
  )
}
