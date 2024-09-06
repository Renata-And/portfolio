import React from 'react';
import { Container } from '../../components/Container.styled';
import { FlexWrapper } from '../../components/FlexWrapper.styled';
import { Icon } from '../../components/icon/Icon';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import { S } from './Header_Styles';

const menuItems = [{ itemTitle: 'About', href: 'about' }, { itemTitle: 'Projects', href: 'projects' }, { itemTitle: 'Experience', href: 'experience' }, { itemTitle: 'Contacts', href: 'contacts' }];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 769;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper align={'center'}>
          <Icon iconId={'logo'} width={'50'} height={'50'} viewBox={'0 0 48 48'} />
          <S.Name>Renata Androsova</S.Name>
          {width < breakpoint
            ? <MobileMenu items={menuItems} />
            : <DesktopMenu items={menuItems} />}
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}


