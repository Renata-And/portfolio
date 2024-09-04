import styled from 'styled-components';
import { theme } from '../../styles/Theme';

const Header = styled.header`
  svg {
    padding: 5px;
  }
`

const Name = styled.span`
  margin-left: 10px;
  margin-right: auto;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.fontPrimary};

  z-index: 10;
`

export const S = {
  Header,
  Name
}