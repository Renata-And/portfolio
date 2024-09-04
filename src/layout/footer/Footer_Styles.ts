import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  padding-bottom: 240px;
  position: relative;
`

const SocialList = styled.ul`
  display: flex;
  gap: 24px;
  margin-bottom: 26px;
`

const SocialLink = styled.a`
  display: inline-block;
  color: ${theme.colors.fontPrimary};

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`

const Copyright = styled.small`
  font-size: 16px;
  color: ${theme.colors.fontSecondary};
`

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`

export const S = {
  Footer,
  SocialList,
  SocialLink,
  Copyright,
  Image
}