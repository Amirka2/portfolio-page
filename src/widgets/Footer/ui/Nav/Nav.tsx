import React from 'react';

import { Paths } from '@shared';

import * as SC from './Nav.styles';

export const Nav = () => {
    return (
        <SC.Nav>
              <SC.Header>Навигация</SC.Header>
              <SC.NavMenu>
                <SC.Link to={Paths.Main}>Главная</SC.Link>
                <SC.Link to={Paths.About}>Об авторе</SC.Link>
                <SC.Link to={Paths.Jobs}>Работы</SC.Link>
                <SC.Link to={Paths.Publications}>Публикации</SC.Link>
                <SC.Link to={Paths.Events}>События</SC.Link>
                <SC.Link to={Paths.Contacts}>Контакты</SC.Link>
              </SC.NavMenu>
            </SC.Nav>
    );
};