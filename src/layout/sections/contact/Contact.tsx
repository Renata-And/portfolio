import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.styled'
import { Button } from '../../../components/Button.styled'

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact me</SectionTitle>
      <StyledForm>
        <StyledLabel>Name</StyledLabel>
        <Field type={'text'} />
        <StyledLabel>Email</StyledLabel>
        <Field type={'email'} />
        <StyledLabel>Message</StyledLabel>
        <Field as='textarea' />
        <Button type={'submit'} btnType={'primary'}>Send</Button>
      </StyledForm>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  min-height: 70vh;
  outline: 1px solid blueviolet;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 400px;
  margin: 0 auto;
  outline: 1px solid blueviolet;
`

const StyledLabel = styled.label`
  
`

const Field = styled.input`

`