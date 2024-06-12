import React from 'react';

import {Paths} from "@shared";

import * as SC from './NavMenu.styles';

export const NavMenu = () => {
  return (
    <SC.Container>
      <SC.Link to={Paths.Main}>
        Главная
      </SC.Link>
      <SC.Link to={Paths.About}>
        Об авторе
      </SC.Link>
      <SC.Link to={Paths.Jobs}>
        Работы
      </SC.Link>
      <SC.Link to={Paths.Publications}>
        Публикации
      </SC.Link>
      <SC.Link to={Paths.Events}>
        События
      </SC.Link>
      <SC.Link to={Paths.Contacts}>
        Контакты
      </SC.Link>
    </SC.Container>
  );
};
