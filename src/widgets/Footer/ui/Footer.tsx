import React from 'react';
import { useLocation } from 'react-router-dom';

import { Color, Paths } from '@shared';
import { useTranslation } from '@shared/hooks';
import { ArrowIcon, Container } from '@shared/ui';

import { LanguageSwitcher } from '@features/LanguageSwitcher';

import { Contacts } from './Contacts';
import * as SC from './Footer.styles';
import { Nav } from './Nav';

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const handleGoTopClick = () => {
    window.scroll(0, 0);
  };

  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <SC.MainInfo>
            <SC.ContactsWrapper>
              <Contacts />
            </SC.ContactsWrapper>
            <SC.NavigationWrapper>
              <Nav />
            </SC.NavigationWrapper>
          </SC.MainInfo>
          <SC.SubInfo>
            <SC.Caption>
              ©
              {' '}
              {t('Footer.name')}
              {' '}
              —
              {' '}
              {new Date().getFullYear()}
            </SC.Caption>
            <LanguageSwitcher
              color={Color.White}
              hasChinese={location.pathname === Paths.About}
            />
          </SC.SubInfo>
          <SC.GoTop onClick={handleGoTopClick}>
            <ArrowIcon />
          </SC.GoTop>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};
