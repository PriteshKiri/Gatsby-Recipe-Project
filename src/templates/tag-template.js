import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import Seo from "../components/SEO"

const TagTemplate = props => {
  console.log(props)
  const recipes = props.data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title={props.pageContext.tag} />
      <main className="page">
        <h2>{props.pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        cookTime
        title
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        id
        preptime
      }
    }
  }
`

export default TagTemplate
