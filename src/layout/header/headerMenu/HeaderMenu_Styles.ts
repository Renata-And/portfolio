import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';
import { Link } from 'react-scroll';


// Menu

const MenuItem = styled.li`
  transition: ${theme.animations.transition};

  &:hover {
    transform: scale(1.1);
  }

  @media ${theme.media.desktop} {
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      height: 2px;
      width: 100%;
      background-color: ${theme.colors.background};

      position: absolute;
      top: 90%;

      transform: scale(0);
      transition: ${theme.animations.transition};
    }

    &:hover {
      &::before {
        transform: scale(1);
      }
    }
  }
`

const NavLink = styled(Link)`
  ${font({ family: "'Raleway', sans-serif", weight: 500, lineHeight: 1.56 })}
  font-size: 18px;
  color: ${theme.colors.fontPrimary};

  @media ${theme.media.tablet} {
    font-size: 26px;
  }
`

// Mobile menu

const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(253, 196, 53, 0.95);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.6s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    transition: 0.6s ease-in-out;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);

    & ul {
      gap: 30px;
    }
  `}

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
    transition: 0.6s ease-in-out;

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
      transition: 0.6s ease-in-out;

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

      transition: 0.6s ease-in-out;
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

// Desktop menu

const DesktopMenu = styled.nav`
  z-index: 99;

  ul {
    display: flex;
    align-items: center;
    gap: 48px;
  }
`

export const S = {
  MenuItem,
  NavLink,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu
}