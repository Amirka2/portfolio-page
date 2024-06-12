import React from 'react';

import * as SC from './NavMenu.styles';

export const NavMenu = () => {
  return (
    <SC.Container>
      <SC.Link to='/'>
        Главная
      </SC.Link>
      <SC.Link to='/'>
        Об авторе
      </SC.Link>
      <SC.Link to='/'>
        Работы
      </SC.Link>
      <SC.Link to='/'>
        Публикации
      </SC.Link>
      <SC.Link to='/'>
        События
      </SC.Link>
      <SC.Link to='/'>
        Контакты
      </SC.Link>
    </SC.Container>
  );
};
