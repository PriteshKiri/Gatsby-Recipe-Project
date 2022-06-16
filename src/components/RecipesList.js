import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, cookTime, preptime, images } = recipe
        const pathToImage = getImage(images)
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${slug}`} key={id} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt="title"
            />
            <h5>{title}</h5>
            <p>
              Prep: {preptime}min | Cook: {cookTime}min{" "}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
