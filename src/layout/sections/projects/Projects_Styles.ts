import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";

const Projects = styled.section``

const Project = styled.div`
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);
  border-radius: 24px;
  overflow: hidden;

  & + & {
    margin-top: 80px;
  }

  &:nth-child(2n + 1) {
    ${FlexWrapper} {
      flex-direction: row-reverse;
    }
  }

  @media ${theme.media.mobile} {
    & + & {
      margin-top: 50px;
    }
  }
`

const Wrapper = styled.div`
  width: 345px;
  flex-grow: 1;
  padding: 130px 50px;

  @media ${theme.media.mobile} {
    padding-left: 35px;
    padding-right: 27px;
  }
`

const ProjectTitle = styled.h3`
  ${font({ family: '"Playfair Display", sans-serif', lineHeight: 1.5, weight: 700 })}
  font-size: 40px;
  color: ${theme.colors.fontPrimary};
`

const Text = styled.p`
  margin: 25px 0 25px;
`

const Link = styled.a`
  display: inline-block;
  border: 1px solid ${theme.colors.fontPrimary};
  border-radius: 24px;
  padding: 8px 24px;

  ${font({ family: '"Roboto", sans-serif', lineHeight: 1.5, weight: 500 })}
  font-size: 18px;
  color: ${theme.colors.fontPrimary};

  &:hover {
    border: 1px solid ${theme.colors.accent};
    background-color: ${theme.colors.accent};
  }
`
const Image = styled.img`
  width: 345px;
  height: 525px;
  object-fit: cover;
  flex-grow: 1;
`


export const S = {
  Projects,
  Project,
  Wrapper,
  ProjectTitle,
  Text,
  Link,
  Image
}