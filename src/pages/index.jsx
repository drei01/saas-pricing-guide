import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

const TITLE = "SaaS Pricing Guide"
const DESCRIPTION =
  "Compare the pricing strategies for hundreds of SaaS companies"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title={TITLE}
        description={DESCRIPTION}
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#saas"
        title={TITLE}
        description={DESCRIPTION}
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          Name
          FreePeriod
          slug
        }
      }
    }
  }
`
