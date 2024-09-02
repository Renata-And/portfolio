import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';

type MenuPropsType = {
  items: { itemTitle: string; href: string; }[];
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.items.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href={item.href}>{item.itemTitle}</Link>
            </ListItem>
          )
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  z-index: 99;
  
  @media ${theme.media.tablet} {
    display: none;
  }

  ul {
    display: flex;
    gap: 30px;
  }

`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 2px;
    width: 100%;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 90%;

    transform: scale(0);
  }

  &:hover {
    opacity: 0.8;

    &::before {
      transform: scale(1);
    }
  }
`

const Link = styled.a`
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 156%;
  color: ${theme.colors.fontPrimary};
`