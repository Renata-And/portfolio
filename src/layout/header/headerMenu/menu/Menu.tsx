import React from 'react';
import { S } from '../HeaderMenu_Styles';

type MenuPropsType = {
  items: { itemTitle: string; href: string; }[];
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.Link href={item.href}>{item.itemTitle}</S.Link>
          </S.MenuItem>
        )
      })}
    </ul>
  )
}

