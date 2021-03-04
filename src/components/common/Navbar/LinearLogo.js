import React from 'react';
// import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Brand } from './style';
// import Img from 'gatsby-image';

const LinearLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "crysto-linear-logo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Brand>
        <h1>Crys.to</h1>
      </Brand>
    )}
  />
);

// const Art = styled.figure`
//   width: 100%;
//   margin: 0;
// `;

export default LinearLogo;
