import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle.styled';
import { Icon } from '../../../components/icon/Icon';
import { Container } from '../../../components/Container.styled';
import { S } from './Skills_Styles';
import Tilt from 'react-parallax-tilt';

const skillsData = [
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

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <S.IconsWrapper>
          {skillsData.map((s, i) => {
            return (
              <Tilt scale={1.1} transitionSpeed={2500} >
                <Icon key={i} iconId={s.name} width={s.width} height={s.heigth} viewBox={`0 0 ${s.width} ${s.heigth}`} />
              </Tilt>
            )
          })}
        </S.IconsWrapper>
      </Container>
    </S.Skills>
  )
}

