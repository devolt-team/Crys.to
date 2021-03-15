import React from 'react';
import styled from 'styled-components';
import StrategyGif from '@static/gif/strategy.gif';
import AnalyticsGif from '@static/gif/data_analytics.gif';
import AutomationGif from '@static/gif/automation.gif';
import { Section, Container } from '@components/global';
const HowItWorks = () => (
  <Section id="how_it_works">
    <Container>
      <Grid>
        <div>
          <h2>Define your trade strategy structures</h2>
          <p>
            Define your knowledge in simple and standard language, also you can
            create your own indicator and rules based on technical or
            sentimental sources.
          </p>
        </div>
        <Art>
          <img src={StrategyGif} alt="strategy structures" />
        </Art>
      </Grid>
      <Grid inverse>
        <Art>
          <img src={AnalyticsGif} alt="historical data" />
        </Art>
        <div>
          <h2>Get historical data and simulate trading</h2>
          <p>
            Crysto create historical data according to your algorithm in any
            market and any time-frame. And this is a magic when Data, speaks to
            you and help you to improve algorithm.
          </p>
        </div>
      </Grid>
      <Grid>
        <div>
          <h2>Automate trading</h2>
          <p>
            Crypto Market never sleeps. also When the time comes, It is very
            important to act quickly and not be influenced by emotions. The
            Crysto team, provide 2 automated trading strategies for spot and
            feature markets that control all buys, sells, take profits and stop
            losses which placed by your algorithm and add some magical methods
            to risk management.
          </p>
        </div>
        <Art>
          <img src={AutomationGif} alt="Automate trading" />
        </Art>
      </Grid>
    </Container>
  </Section>
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`;

export default HowItWorks;
