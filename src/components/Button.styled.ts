import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

type ButtonPropsType = {
  btnType: string
}

export const Button = styled.button<ButtonPropsType>`
  display: inline-block;
  ${font({ family: '"Roboto", sans-serif', weight: 500 })}
  font-size: 18px;
  color: ${theme.colors.fontPrimary};

  padding: 10px 24px;
  border-radius: 8px;

  ${props => props.btnType === 'primary' && css<ButtonPropsType>`
    background-color: ${theme.colors.accent};
  `}

  ${props => props.btnType === 'outline' && css<ButtonPropsType>`
    padding: 8px 24px;
    background-color: transparent;
    border: 2px solid ${theme.colors.fontPrimary};
  `}

  transition: background-color ${theme.animations.transition};

  & + & {
    margin-left: 12px;
  }

  &:hover {

    ${props => props.btnType === 'primary' && css<ButtonPropsType>`
      background-color: transparent;
      border: 2px solid ${theme.colors.fontPrimary};
      padding: 8px 22px;
    `}

    ${props => props.btnType === 'outline' && css<ButtonPropsType>`
      background-color: ${theme.colors.accent};
      border: 2px solid ${theme.colors.accent};
    `}
  }
`
