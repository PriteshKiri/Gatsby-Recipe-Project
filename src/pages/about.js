import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  console.log(recipes)
  return (
    <Layout>
      <Seo title={"About"} />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Are you Hungry ??</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis dicta dolor libero tenetur, nisi possimus
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis dicta dolor libero tenetur, nisi possimus
            </p>

            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="about feature"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>I know you are starving!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        cookTime
        id
        preptime
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default About
