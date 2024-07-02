import React from "react";

import { Container } from "@shared/ui";
import { Event } from "@entities/Event";

import * as SC from "./Events.styles";

const mock = [
  {
    photo: "https://s3-alpha-sig.figma.com/img/a325/e710/185738ebfa82b3006985c5588594aaaa?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bsu0S-J9NtPhAxPXo0hGZX4Xrg0wr13rIRExYT0wvJoluXyDgQVjNtXPGv5RQ6UwJFo9~T1iet3CXaCLEm2TPwDZBdGMS7~4silgTc62rUIFIxIfl4yW9BSzCYe9m3RkqDmo57eyP8kOO7Yr0lC3Not-bW6AIrpSzZOy9rmngkCbSdNbVJ2UWZyyt8Fsz6PJVIn25RPJuTEAFpDI1893ZAplDGPaTm~PL67g4bxuKj2a~oGe4CyVnF~r9FHAC4yVGJpQ-kq8NvAdRRqgqRRdCzLl2gHNeMt-a4rnDbRqoHB-yiKAYAg06SQzCM-RFF23XIUvt~XPRZrGxptsMnRXFA__",
    text: "Статья о Катерине Дороховой в газете «Все для вас», Сергиев Посад, о ее первой персональной выставке в залах библиотеки им. Горловского.",
    year: "1998",
  },
  {
    photo: "https://s3-alpha-sig.figma.com/img/a325/e710/185738ebfa82b3006985c5588594aaaa?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bsu0S-J9NtPhAxPXo0hGZX4Xrg0wr13rIRExYT0wvJoluXyDgQVjNtXPGv5RQ6UwJFo9~T1iet3CXaCLEm2TPwDZBdGMS7~4silgTc62rUIFIxIfl4yW9BSzCYe9m3RkqDmo57eyP8kOO7Yr0lC3Not-bW6AIrpSzZOy9rmngkCbSdNbVJ2UWZyyt8Fsz6PJVIn25RPJuTEAFpDI1893ZAplDGPaTm~PL67g4bxuKj2a~oGe4CyVnF~r9FHAC4yVGJpQ-kq8NvAdRRqgqRRdCzLl2gHNeMt-a4rnDbRqoHB-yiKAYAg06SQzCM-RFF23XIUvt~XPRZrGxptsMnRXFA__",
    text: "Статья о Катерине Дороховой в газете «Все для вас», Сергиев Посад, о ее первой персональной выставке в залах библиотеки им. Горловского.",
    year: "1998",
  },
  {
    photo: "https://s3-alpha-sig.figma.com/img/a325/e710/185738ebfa82b3006985c5588594aaaa?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bsu0S-J9NtPhAxPXo0hGZX4Xrg0wr13rIRExYT0wvJoluXyDgQVjNtXPGv5RQ6UwJFo9~T1iet3CXaCLEm2TPwDZBdGMS7~4silgTc62rUIFIxIfl4yW9BSzCYe9m3RkqDmo57eyP8kOO7Yr0lC3Not-bW6AIrpSzZOy9rmngkCbSdNbVJ2UWZyyt8Fsz6PJVIn25RPJuTEAFpDI1893ZAplDGPaTm~PL67g4bxuKj2a~oGe4CyVnF~r9FHAC4yVGJpQ-kq8NvAdRRqgqRRdCzLl2gHNeMt-a4rnDbRqoHB-yiKAYAg06SQzCM-RFF23XIUvt~XPRZrGxptsMnRXFA__",
    text: "Статья о Катерине Дороховой в газете «Все для вас», Сергиев Посад, о ее первой персональной выставке в залах библиотеки им. Горловского.",
    year: "1998",
  },
  {
    photo: "https://s3-alpha-sig.figma.com/img/a325/e710/185738ebfa82b3006985c5588594aaaa?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bsu0S-J9NtPhAxPXo0hGZX4Xrg0wr13rIRExYT0wvJoluXyDgQVjNtXPGv5RQ6UwJFo9~T1iet3CXaCLEm2TPwDZBdGMS7~4silgTc62rUIFIxIfl4yW9BSzCYe9m3RkqDmo57eyP8kOO7Yr0lC3Not-bW6AIrpSzZOy9rmngkCbSdNbVJ2UWZyyt8Fsz6PJVIn25RPJuTEAFpDI1893ZAplDGPaTm~PL67g4bxuKj2a~oGe4CyVnF~r9FHAC4yVGJpQ-kq8NvAdRRqgqRRdCzLl2gHNeMt-a4rnDbRqoHB-yiKAYAg06SQzCM-RFF23XIUvt~XPRZrGxptsMnRXFA__",
    text: "Статья о Катерине Дороховой в газете «Все для вас», Сергиев Посад, о ее первой персональной выставке в залах библиотеки им. Горловского.",
    year: "1998",
  },
];

export const Events = () => {
  return (
    <Container>
      <SC.Wrapper>
        {mock.map(event => (
          <Event photo={event.photo} text={event.text} year={event.year} />
        ))}
      </SC.Wrapper>
    </Container>
  );
};
