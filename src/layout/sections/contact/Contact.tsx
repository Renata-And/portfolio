import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionTitle } from '../../../components/SectionTitle.styled';
import { Button } from '../../../components/Button.styled';
import { Container } from '../../../components/Container.styled';
import { S } from './Contact_Styles';

export const Contact: React.FC = () => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_ek43eev', 'template_wbr85qr', form.current, {
        publicKey: 'XcHDIoHNpxAEUjlDg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();
  };

  return (
    <S.Contact id={'contacts'}>
      <Container>
        <SectionTitle>Contact me</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Label>
            <span>Name</span>
            <S.Field type={'text'} name={'user_name'} required />
          </S.Label>
          <S.Label>
            <span>Email</span>
            <S.Field type={'email'} name={'email'} required />
          </S.Label>
          <S.Label>
            <span>Message</span>
            <S.Field as='textarea' name={'message'} required />
          </S.Label>
          <Button type={'submit'} btnType={'primary'}>Send</Button>
        </S.Form>
      </Container>
    </S.Contact>
  )
}

