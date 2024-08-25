import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string
  wrap?: string
  justify?: string
  align?: string
  gap?: string
  maxWidth?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '0'};
  height: 100%;
  max-width: ${props => props.maxWidth || '100%'};
`