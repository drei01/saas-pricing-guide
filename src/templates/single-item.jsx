import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Feature, SiteMetadata } from "../components"
import { useModal } from "../context"
import { Layout } from "../layouts/Layout"

export default (props) => {
  const { data, location } = props
  const { Name, FreePeriod } = data.item.data
  const navigation = location.state ? location.state.navigation : null
  const { modal } = useModal()

  return (
    <Layout navigation={navigation}>
      <SiteMetadata title={Name} description={""} image={""} />
      <article className={modal && "max-h-80vh md:max-h-90vh overflow-auto"}>
        <div className={modal ? "p-4 lg:p-8" : "container py-8"}>
          <h1 className="text-2xl lg:text-3xl text-blue-500 dark:text-blue-400 font-bold leading-tight">
            {Name}
          </h1>
          <p className="text-base lg:text-lg text-blue-800 dark:text-blue-500 font-medium mb-4">
            Summary here
          </p>
          <div className="flex flex-wrap">
            <div className="w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0">
              <Img fluid={""} alt={Name} />
            </div>
            <div className="w-full lg:w-2/5 lg:pl-4">
              <Feature label="Free Period" value={FreePeriod} />
              <Feature label="What to see?" value={""} />
              <Feature label="More info" value={""} />
              <p className="mt-4 whitespace-pre-line text-sm lg:text-base leading-normal text-blue-900 dark:text-blue-600">
                Description Here
              </p>
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
        FreePeriod
        slug
      }
    }
  }
`
