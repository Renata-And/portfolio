import React from 'react';
import { S } from '../Experience_Styles';

type WorkplacePropsType = {
  year: number
  text: string
}

export const Workplace: React.FC<WorkplacePropsType> = (props: WorkplacePropsType) => {
  return (
    <S.Workplace>
      <S.YearWrapper><S.Year>{props.year}</S.Year></S.YearWrapper>
      <p>{props.text}</p>
    </S.Workplace>
  )
}

