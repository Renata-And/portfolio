import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { FlexWrapper } from '../../../components/FlexWrapper.styled'
import { Icon } from '../../../components/icon/Icon'
import { Container } from '../../../components/Container.styled'

const skillsItems = ['css', 'git', 'github', 'html', 'js', 'react', 'reactToolkit', 'sass', 'tailwind', 'vscode'];

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper justify={'center'} gap={'50px'} wrap={'wrap'}>
          {skillsItems.map((item, i) => {
            return (
              <Icon key={i} iconId={item} width={'131'} height={'131'} viewBox={'0 0 131 131'} />
            )
          })}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  outline: 1px solid blueviolet;
`