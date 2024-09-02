import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

type MenuPropsType = {
  items: { itemTitle: string; href: string; }[];
};

export const MobileMenu = (props: MenuPropsType) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={false}>
        <ul>
          {props.items.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href={item.href}>{item.itemTitle}</Link>
              </ListItem>
            )
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(253, 196, 53, 0.98);
  z-index: 999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 8px;
  right: 15px;
  width: 30px;
  height: 30px;
  z-index: 9999;

  span {
    display: block;
    width: 26px;
    height: 2px;
    background-color: ${theme.colors.fontPrimary};
    position: absolute;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: '';
      display: block;
      width: 26px;
      height: 2px;
      background-color: ${theme.colors.fontPrimary};
      position: absolute;
      transform: translateY(-6px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 26px;
      height: 2px;
      background-color: ${theme.colors.fontPrimary};

      position: absolute;
      transform: translateY(6px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
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
  font-size: 24px;
  line-height: 156%;
  color: ${theme.colors.fontPrimary};
`
