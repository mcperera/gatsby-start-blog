import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
} from "./../elements/FooterElements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedIn: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook" />
          </a>
          <a
            href="https://linkedIn.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            <img src={data.linkedIn.publicURL} alt="linkedIn" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="instagram" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="nopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter" />
          </a>
        </FooterSocialIcons>
        <p>© 2021 Madushan Perera All Rights Reserved</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
