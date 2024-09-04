import styled from 'styled-components';

const Skills = styled.section`
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;

  div {
    flex-basis: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const S = {
  Skills,
  IconsWrapper
}