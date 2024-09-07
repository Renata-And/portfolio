import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { S } from '../Projects_Styles';
import { Fade } from "react-awesome-reveal";

type ProjectPropsType = {
  title: string
  description: string
  href: string
  src: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <Fade>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap-reverse'}>
          <S.Wrapper>
            <S.ProjectTitle>{props.title}</S.ProjectTitle>
            <S.Text>{props.description}</S.Text>
            <S.Link>View Project</S.Link>
          </S.Wrapper>
          <S.Image src={props.src} />
        </FlexWrapper>
      </Fade>
    </S.Project>
  )
}

