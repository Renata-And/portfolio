import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle.styled';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { Workplace } from './workplace/Workplace';
import { Container } from '../../../components/Container.styled';
import { S } from './Experience_Styles';

const workplaceData = [
  {
    year: 2022,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'
  },
  {
    year: 2023,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'
  },
  {
    year: 2024,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.'
  }
]

export const Experience: React.FC = () => {
  return (
    <S.Experience>
      <SectionTitle>Experience</SectionTitle>
      <Container>
        <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
          {workplaceData.map((w, i) => {
            return (
              <Workplace year={w.year} text={w.text} />
            )
          })}
        </FlexWrapper>
      </Container>
    </S.Experience>
  )
}

