import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

type MenuPropsType = {
  items: { itemTitle: string; href: string; }[];
};

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <S.DesktopMenu>
      <Menu items={props.items} />
    </S.DesktopMenu>
  );
};

