import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle.styled';
import { Button } from '../../../components/Button.styled';
import { Container } from '../../../components/Container.styled';
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Form>
          <S.Label>
            <span>Name</span>
            <S.Field type={'text'} />
          </S.Label>
          <S.Label>
            <span>Email</span>
            <S.Field type={'email'} />
          </S.Label>
          <S.Label>
            <span>Message</span>
            <S.Field as='textarea' />
          </S.Label>
          <Button type={'submit'} btnType={'primary'}>Send</Button>
        </S.Form>
      </Container>
    </S.Contact>
  )
}

