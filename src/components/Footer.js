import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { StyledHyperLink as SHL } from '../components/Shared';
import ThemeSelect from '../components/ThemeSelect';
import { useSiteMetadata } from '../hooks/siteMetadata';
import { media } from '../theme/globalStyle';

// import { Dump } from '../utils/helpers'

const FooterWrapper = styled.footer`
  z-index: 1;
  bottom: 0;
  /* width: 100%; */
  /* position: fixed; */
  grid-area: f;
  display: grid;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.fontDark};
  box-shadow: rgba(0, 0, 0, 0.1) 0px -5px 5px 0px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . l s . g g g . . .'
    '. . . . . . g g g . . .'
    '. . . . . . r r r . . .'
    '. . . t . . r r r . . .';
  ${media.giant`
    grid-template-areas:
      '. . l s . . . g g g . .'
      '. . . . . . . g g g . .'
      '. . . . . . . r r r . .'
      '. . . t . . . r r r . .';
      /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      '. l s . . . g g g g g .'
      '. . . . . . g g g g g .'
      '. . . . . . r r r r r .'
      '. t . . . . r r r r r .';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    /* height: 30rem; */
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        '. l s . . . . . .'
        '. t . . . . . . .'
        '. g g g g . . . .'
        '. g g g g . . . .'
        '. r r r r . . . .'
        '. r r r r . . . .';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
        'l s . . . . . . .'
        't . . . . . . . .'
        'g g g g . . . . .'
        'r r r r . . . . .';
    /* background: palevioletred; */
  `};
`;

// // const ImageWrapper = styled.div`
// //   margin: 0.5rem;
// //   padding: 0.5rem;
// //   grid-area: ${props => props.area};
// // `

const LinksList = styled.ul`
  grid-area: ${props => props.area};
  margin: 0.5rem;
  padding: 0.5rem;
`;

const LinksListTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${props => props.theme.fontHeader};
  color: ${props => props.theme.fontLight};
`;

const ListLink = styled.li`
  list-style-type: none;
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
`;

const StyledHyperLink = styled(SHL)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`;

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
  text-transform: capitalize;
`;

const Footer = () => {
  const { pages, contact } = useSiteMetadata();
  return (
    <FooterWrapper>
      <ThemeSelect />
      {/* <Dump data={data} pages={pages} /> */}
      <LinksList area={'l'}>
        <LinksListTitle>Links</LinksListTitle>
        {pages.map((page, index) => (
          <StyledLink key={index} to={page}>
            <ListLink>{page}</ListLink>
          </StyledLink>
        ))}
      </LinksList>
      <LinksList area={'s'}>
        <LinksListTitle>Social</LinksListTitle>
        {contact.map((details, index) => (
          <StyledHyperLink
            key={index}
            href={details.link}
            target="_blank"
            rel="noopener">
            <ListLink>{details.name}</ListLink>
          </StyledHyperLink>
        ))}
      </LinksList>
    </FooterWrapper>
  );
};

export default Footer;
