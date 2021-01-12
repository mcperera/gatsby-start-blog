import styled from "styled-components"

export const PostWrapper = styled.main`
  grid-column: 4 / span 8;
  grid-row: 3 / 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.dark1};
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-size: 400;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-size: 400;
  }

  h3 {
    font-size: 1.375rem;
    line-height: 1.625rem;
    font-size: 400;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-size: 400;
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1.375rem;
    font-size: 700;
  }

  h5 {
    font-size: 1rem;
    line-height: 1.125rem;
    font-size: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-size: 400;
    color: ${props => props.theme.colors.dark2};
    margin-top: 2rem;
  }

  a {
    color: ${props => props.theme.colors.main1};
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`
