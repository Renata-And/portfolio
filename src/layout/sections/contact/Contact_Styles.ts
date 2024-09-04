import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Contact = styled.section`
  textarea {
    display: block;
    resize: none;
    height: 158px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 56px;

  & button {
    align-self: flex-end;
  }
`

const Label = styled.label`
  ${font({ weight: 600, lineHeight: 1.5 })}
  font-size: 16px;
  color: ${theme.colors.fontPrimary};

  span {
    display: inline-block;
    margin-bottom: 8px;
  }
`

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  border-radius: 8px;
  height: 38px;

  font-size: 16px;
  font-family: 'Nunito', sans-serif;

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`

export const S = {
  Contact,
  Form,
  Label,
  Field
}