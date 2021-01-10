import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "./../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="2021/1/10"
          title="Test"
          excerpt="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          slug="https://www.google.com"
        />
      </Content>
    </Container>
  )
}

export default IndexPage
