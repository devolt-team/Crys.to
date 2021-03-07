import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';
import LinkedinIcon from '@static/icons/linkedin.svg';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Alireza Moshtaghi',
    image: 'alireza.jpg',
    role: 'Market Analyst',
    linkedin: 'https://www.linkedin.com/in/alimoshtaghi/',
  },
  {
    name: 'Faramarz Salehpour',
    image: 'faramarz.jpg',
    role: 'Backend Developer',
    linkedin: 'https://www.linkedin.com/in/fsalehpour/',
  },
  {
    name: 'Mahsa Mohsenian',
    image: 'mahsa.jpg',
    role: 'Financial Operation',
    linkedin: 'https://www.linkedin.com/in/mahsa-mohsenian-1872935a/',
  },
  {
    name: 'Mehdi Moshtaghi',
    image: 'mehdi.jpg',
    role: 'FullStack Developer',
    linkedin: 'https://www.linkedin.com/in/moshtaghim/',
  },
  {
    name: 'Sadra Amlashi',
    image: 'sadra.jpg',
    role: 'Backend Developer',
    linkedin: 'https://www.linkedin.com/in/amlashisadra/',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>The Team</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role, linkedin }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                  <ExternalLink href={linkedin}>
                    <img src={LinkedinIcon} alt="linkdin profile" />
                  </ExternalLink>
                </div>
              );
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  img {
    border-radius: 5px;
  }

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -50%;
  transform: rotate(85deg);

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  font-size: 22px;
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
