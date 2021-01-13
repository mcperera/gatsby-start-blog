import React from "react"
import { graphql } from "gatsby"
import { Container, FeatureImage } from "../components"
// import { H1 } from "../elements"

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "404ERROR.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
