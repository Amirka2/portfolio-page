import React, { useCallback } from 'react';

import { Color } from '@shared';
import { useTranslation } from '@shared/hooks';

import * as SC from './LanguageSwitcher.styles';

interface LanguageSwitcherProps {
  hasChinese?: boolean;
  color?: string;
}

export const LanguageSwitcher = ({
  color = Color.Black,
  hasChinese,
}: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const { language } = i18n;

  const handleChange = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  const isActive = useCallback(
    (locale: string) => locale === language,
    [language],
  );

  return (
    <SC.Wrapper>
      <SC.Button
        onClick={() => handleChange('en')}
        isActive={isActive('en')}
        color={color}
      >
        En
      </SC.Button>
      <SC.Button
        onClick={() => handleChange('ru')}
        isActive={isActive('ru')}
        color={color}
      >
        Ru
      </SC.Button>
      {hasChinese && (
        <SC.Button
          onClick={() => handleChange('cn')}
          isActive={isActive('cn')}
          color={color}
        >
          Cn
        </SC.Button>
      )}
    </SC.Wrapper>
  );
};
