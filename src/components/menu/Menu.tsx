import React from 'react';
import styled from 'styled-components';

type MenuPropsType = {
  items: { itemTitle: string; href: string; }[];
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.itemTitle}</a>
            </li>
          )
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
