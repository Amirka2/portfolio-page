import { Color } from "@shared";
import { rgba } from "polished";
import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

export const Main = styled.section`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Image = styled.img`
  max-height: 640px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  color: ${Color.Black};
`;

export const Link = styled.a`
  text-decoration: none;

  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  color: ${Color.Black};

  &:hover {
    color: ${rgba(Color.Black, .7)}
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

  width: 60px;
  height: 60px;

  background: transparent;

  border-radius: 50%;
  border: 1px solid ${Color.Black};

  &:hover {
    filter: opacity(.7);
  }
`;