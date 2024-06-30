import React from "react";

import img from "@static/images/graphics.jpeg";
import { Color } from "@shared";
import {
  Container,
  Line,
  SubTitle,
  TelegramIcon,
  WhatsappIcon,
} from "@shared/ui";

import * as SC from "./Contacts.styles";

export const Contacts = () => {
  return (
    <Container>
      <SC.Wrapper>
        <SC.Main>
          <SC.Image src={img} alt="contacts image" />
          <SC.Info>
            <SubTitle>Дорохова Екатерина Сергеевна</SubTitle>
            <Line />
            <strong>Остались вопросы? Свяжитесь со мной</strong>
            <SC.Text>
              Телефон:&nbsp;
              <SC.Link href="tel:899999999">+7(921) 39-79-888</SC.Link>
            </SC.Text>
            <SC.Text>
              Email:&nbsp;
              <SC.Link href="mailto:ketrina@mail.ru">ketrina@mail.ru</SC.Link>
            </SC.Text>
            <SC.SocialLinks>
              <SC.ContactButton href="https://t.me/">
                <TelegramIcon color={Color.Black} width={34} height={28} />
              </SC.ContactButton>
              <SC.ContactButton href="/">
                <WhatsappIcon color={Color.Black} width={30} height={28} />
              </SC.ContactButton>
            </SC.SocialLinks>
          </SC.Info>
        </SC.Main>
      </SC.Wrapper>
    </Container>
  );
};
