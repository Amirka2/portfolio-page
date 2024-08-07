import React from 'react';

import { Paths } from '@shared';
import { useTranslation } from '@shared/hooks';

import * as SC from './Nav.styles';

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <SC.Nav>
      <SC.Header>
        {t('Footer.navigation')}
      </SC.Header>
      <SC.NavMenu>
        <SC.Link to={Paths.Main}>
          {t('Footer.main')}
        </SC.Link>
        <SC.Link to={Paths.About}>
          {t('Footer.about')}
        </SC.Link>
        <SC.Link to={Paths.Jobs}>
          {t('Footer.jobs')}
        </SC.Link>
        <SC.Link to={Paths.Publications}>
          {t('Footer.publications')}
        </SC.Link>
        <SC.Link to={Paths.Events}>
          {t('Footer.events')}
        </SC.Link>
        <SC.Link to={Paths.Contacts}>
          {t('Footer.contacts')}
        </SC.Link>
      </SC.NavMenu>
    </SC.Nav>
  );
};
