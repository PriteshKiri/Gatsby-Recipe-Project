import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import SetupTags from "../utils/SetupTags"
import slugify from "slugify"
import Seo from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = SetupTags(data.allContentfulRecipe.nodes)
  console.log(newTags)
  return (
    <Layout>
      <Seo title={"Tags"} />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const tagSlug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${tagSlug}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
