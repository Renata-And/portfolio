import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { theme } from '../../../styles/Theme';


const Experience = styled.section`
  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-direction: column;
      gap: 30px;
    }
  }

  ${FlexWrapper}:first-child {
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 67%;
      height: 5px;
      background-color: ${theme.colors.accent};
      position: absolute;
      left: 50%;
      top: 53px;
      transform: translateX(-50%);

      @media ${theme.media.tablet} {
        display: none;
      }
    }
  }
`

const Workplace = styled.div`
  flex-grow: 1;
  width: 200px;
  padding: 0 15px;
  text-align: center;

  @media ${theme.media.tablet} {
    width: 345px;
    padding: 0;
  }
`

const Year = styled.span`
  display: inline-block;
  margin-bottom: 40px;

  font-family: "Playfair Display", sans-serif;
  font-weight: bold;
  font-size: 24px;

  position: relative;
`

const YearWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${theme.colors.fontTitle};
    border-radius: 50%;

    position: absolute;
    left: 50%;
    top: 76%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`

export const S = {
  Experience,
  Workplace,
  Year,
  YearWrapper
}