type FontPropsType = {
  family?: string
  lineHeight?: number
  weight?: number
  Fmax?: number
  Fmin?: number
}

export const font = ({ family, lineHeight, weight, Fmax, Fmin }: FontPropsType) => `
  font-family: ${family || "'Nunito', sans-serif"};
  line-height: ${lineHeight || 1.2};
  font-weight: ${weight || 400};
  font-size: calc( (min(100vw, 1210px) - 480px)/(1210 - 480) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

// font-size: clamp(${Fmin}px, calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px)

// font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);

