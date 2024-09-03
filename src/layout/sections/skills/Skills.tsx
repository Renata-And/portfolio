import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { FlexWrapper } from '../../../components/FlexWrapper.styled'
import { Icon } from '../../../components/icon/Icon'
import { Container } from '../../../components/Container.styled'

const skillsItems = [
  { name: 'css', width: '121', heigth: '121' },
  { name: 'git', width: '106', heigth: '105' },
  { name: 'github', width: '88', heigth: '88' },
  { name: 'html', width: '121', heigth: '120' },
  { name: 'js', width: '121', heigth: '120' },
  { name: 'react', width: '114', heigth: '101' },
  { name: 'reactToolkit', width: '105', heigth: '100' },
  { name: 'sass', width: '118', heigth: '87' },
  { name: 'tailwind', width: '131', heigth: '131' },
  { name: 'vscode', width: '112', heigth: '112' },
];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <IconsWrapper>
          {skillsItems.map((item, i) => {
            return (
              <div>
                <Icon key={i} iconId={item.name} width={item.width} height={item.heigth} viewBox={`0 0 ${item.width} ${item.heigth}`} />
              </div>
            )
          })}
        </IconsWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  /* outline: 1px solid blueviolet; */
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