import React, { useState } from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

type MenuPropsType = {
  items: { itemTitle: string; href: string; }[];
};

export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) };

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => { setMenuIsOpen(false) }}>
        <Menu items={props.items} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

