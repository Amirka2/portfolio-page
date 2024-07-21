import { rgba } from 'polished';
import styled from 'styled-components';

import { Color, mediaQueries } from '@shared';
import { TelegramIcon, WhatsappIcon } from '@shared/ui';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Image = styled.img`
  max-height: 320px;

  ${mediaQueries.gt.Desktop} {
    max-height: 640px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.3;
  color: ${Color.Black};

  ${mediaQueries.gt.Desktop} {
    font-size: 32px;
  }
`;

export const Link = styled.a`
  text-decoration: none;

  font-size: 22px;
  font-weight: 400;
  line-height: 1.3;
  color: ${Color.Black};

  &:hover {
    color: ${rgba(Color.Black, 0.7)};
  }

  ${mediaQueries.gt.Desktop} {
    font-size: 32px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background: transparent;

  border-radius: 50%;
  border: 1px solid ${Color.Black};

  &:hover {
    filter: opacity(0.7);
  }

  ${mediaQueries.gt.Desktop} {
    width: 60px;
    height: 60px;
  }
`;

export const Telegram = styled(TelegramIcon)`
  width: 22px;
  height: 20px;

  ${mediaQueries.gt.Desktop} {
    width: 34px;
    height: 28px;
  }
`;

export const Whatsapp = styled(WhatsappIcon)`
  width: 22px;
  height: 20px;

  ${mediaQueries.gt.Desktop} {
    width: 30px;
    height: 28px;
  }
`;
