import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'

const skillsItems = ['css', 'git', 'github', 'html', 'js', 'react', 'reactToolkit', 'sass', 'tailwind', 'vscode'];

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper justify={'center'} gap={'10px'} wrap={'wrap'}>
        {skillsItems.map((item) => {
          return (
            <Icon iconId={item} width={'131'} height={'131'} viewBox={'0 0 131 131'} />
          )
        })}
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  min-height: 40vh;
  border: 1px solid blueviolet;
`