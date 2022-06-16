import { Link } from "gatsby"
import React from "react"
import SetupTags from "../utils/SetupTags"
import slugify from "slugify"
const TagList = ({ recipes = [] }) => {
  const newTags = SetupTags(recipes)
  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const tagSlug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${tagSlug}`} key={index}>
              {text}({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
