import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { Button } from '../../../components/Button.styled';
import { Container } from '../../../components/Container.styled';
import photoSrc from '../../../assets/images/photo.png';
import { S } from './Hero_Styles';


export const Hero: React.FC = () => {
  return (
    <S.Hero>
      <Container>
        <FlexWrapper justify={'space-between'} align={'flex-start'} gap={'10px'}>
          <S.DescriptionWrapper>
            <S.Title>Software Developer</S.Title>
            <S.Name>Hello,  my name is Renata Androsova</S.Name>
            <S.Text>Short text with details about you, what you do or your professional career. You can add more information on the about page.</S.Text>
            <div>
              <Button btnType={'primary'}>Projects</Button>
              <Button as='a' href={'#'} btnType={'outline'}>LinkedIn</Button>
            </div>
          </S.DescriptionWrapper>
          <S.ImageWrapper>
            <S.Photo src={photoSrc} />
          </S.ImageWrapper>
        </FlexWrapper>
      </Container>
    </S.Hero >
  )
}


