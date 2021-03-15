import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import TelegramIcon from '@static/icons/telegram-line.svg';
import EmailIcon from '@static/icons/email.svg';

const SOCIAL = [
  {
    icon: EmailIcon,
    link: 'mailto:info@crys.to',
  },
  {
    icon: TelegramIcon,
    link: 'https://t.me/CrystoTrader',
  },
];

const Footer = () => (
  <React.Fragment>
    <FooterWrapper>
      <StyledContainer>
        <Copyright>
          <h2>Crysto</h2>
        </Copyright>
        <SocialIcons>
          {SOCIAL.map(({ icon, link }) => (
            <ExternalLink key={link} href={link}>
              <img src={icon} alt="link" />
            </ExternalLink>
          ))}
        </SocialIcons>
      </StyledContainer>
    </FooterWrapper>
  </React.Fragment>
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 32px;
    height: 32px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background: ${props => props.theme.pattern};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
