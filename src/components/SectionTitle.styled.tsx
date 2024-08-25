import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
  font-family: 'Playfair Display', sans-serif;
  font-size: 48px;
  line-height: 150%;
  text-align: center;
  color: ${theme.colors.fontPrimary};

  margin-bottom: 90px;
  
  outline: 1px solid blueviolet;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    border-radius: 2px;
    width: 100px;
    height: 4px;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
