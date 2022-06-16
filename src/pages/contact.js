import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Seo from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title={"Contact"} />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Connect ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
              vero maiores laborum nobis nemo praesentium provident disti
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              hic deleniti corrupti beatae.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mwkyzzod"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="name" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
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

export default Contact
