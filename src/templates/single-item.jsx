import { graphql } from "gatsby"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { useModal } from "../context"
import { Layout } from "../layouts/Layout"

export default (props) => {
  const { data, location } = props
  const { Name, LogoUrl, Description, FreePeriod, Domain } = data.item.data
  const websiteLink = `https://${Domain}?utm_source=pricewell.io`
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={Name} description={Description} image={LogoUrl} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-4 lg:p-8" : "container py-8"}>
          <h1 className="text-2xl lg:text-3xl text-blue-500 dark:text-blue-400 font-bold leading-tight">
            {Name}
          </h1>
          <p className="text-base lg:text-lg text-blue-800 dark:text-blue-500 font-medium mb-4">
            {Description}
          </p>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <img src={LogoUrl} alt={Name} />
            </div>
            <div className="w-full lg:w-2/5 lg:pl-4">
              <Feature label="Free Period" value={FreePeriod} />
              <Feature
                label="Website"
                value={websiteLink}
                valueLabel={Domain}
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query SingleItemQuery($slug: String!) {
    item: airtable(data: { slug: { eq: $slug } }) {
      data {
        Name
        Description
        Domain
        LogoUrl
        FreePeriod
        slug
      }
    }
  }
`
