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
            <S.NavLink
              to={item.href}
              smooth={true}
              offset={50}
            >
              {item.itemTitle}
            </S.NavLink>
          </S.MenuItem>
        )
      })}
    </ul>
  )
}

