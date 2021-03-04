import React from 'react';
import styled from 'styled-components';
// import { StaticQuery, graphql } from 'gatsby';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Text>
        <h2>
          When knowing the algorithm is not enough,
          <br />
          Crys.to help you to improve and automate your trades algorithm
        </h2>
        <br />
        <p>
          <StyledExternalLink href="#how_it_works">
            Check out how it works?
          </StyledExternalLink>
          <StyledExternalLink href="https://calendly.com/crysto/30min">
            Book a Call
          </StyledExternalLink>
        </p>
      </Text>
    </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background: ${props => props.theme.pattern};
  background-size: 200% auto;
  padding-top: 96px;
  color: ${props => props.theme.color.white.regular};
  h2 {
    margin-bottom: 30px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

// const Art = styled.figure`
//   width: 100%;
//   margin: 0;

//   > div {
//     width: 100%;
//     margin-bottom: 10%;

//     @media (max-width: ${props => props.theme.screen.md}) {
//       width: 100%;
//     }
//   }
// `;

const Text = styled.div`
  justify-self: center;
  padding: 5%;
  padding-top: 8%;
  padding-bottom: 15%;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
    padding-top: 0;
    padding-bottom: 25%;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.white.regular};
  margin-right: 20px;
  padding: 12px 25px;
  text-decoration: none;
  -webkit-transition: all 500ms;
  transition: all 500ms;
  color: ${props => props.theme.color.white.regular}; !important;
  -webkit-box-shadow: 0 20px 30px 0 rgb(12 0 46 / 10%);
  box-shadow: 0 20px 30px 0 rgb(12 0 46 / 10%);

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
    display: block;
    margin-right: 0px;
    margin-bottom: 20px;
  }

  &:hover {
    color: ${props => props.theme.color.black.regular};
    border: 1px solid ${props => props.theme.color.black.regular};
  }
`;

export default Header;
