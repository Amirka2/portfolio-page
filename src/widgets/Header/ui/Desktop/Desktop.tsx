import React from 'react';
import { useLocation } from 'react-router-dom';

import { Paths } from '@shared';
import { useTranslation } from '@shared/hooks';
import { Line } from '@shared/ui';

import { LanguageSwitcher } from '@features/LanguageSwitcher';
import { NavMenu } from '@features/nav';

import * as SC from './Desktop.styles';

export const Desktop = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <SC.Container>
      <SC.Header>
        <SC.Wrapper>
          <SC.TopLine>
            <SC.Placeholder />
            <SC.MainText>
              {t('Header.name')}
            </SC.MainText>
            <LanguageSwitcher hasChinese={location.pathname === Paths.About} />
          </SC.TopLine>
          <Line />
          <NavMenu />
        </SC.Wrapper>
      </SC.Header>
    </SC.Container>
  );
};
