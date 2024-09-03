import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { Button } from '../../../components/Button.styled'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container.styled'

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <StyledForm>
          <StyledLabel>
            <span>Name</span>
            <Field type={'text'} />
          </StyledLabel>
          <StyledLabel>
            <span>Email</span>
            <Field type={'email'} />
          </StyledLabel>
          <StyledLabel>
            <span>Message</span>
            <Field as='textarea' />
          </StyledLabel>
          <Button type={'submit'} btnType={'primary'}>Send</Button>
        </StyledForm>
      </Container>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  textarea {
    resize: none;
    height: 160px;
  }
`

const StyledForm = styled.form`
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

const StyledLabel = styled.label`
  font-weight: 600;
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
  height: 40px;

  font-size: 16px;
  font-family: 'Nunito', sans-serif;

  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`