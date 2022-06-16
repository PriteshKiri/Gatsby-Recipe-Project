import React from "react"
import Layout from "../components/Layout"
import Gallery from "../example/Gallery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const getdata = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: TRACED_SVG
            width: 200
            transformOptions: { grayscale: false }
          )
        }
      }
    }
  }
`

const Testing = () => {
  const data = useStaticQuery(getdata)
  const node = data.allFile.nodes
  console.log(node)

  return (
    <Layout>
      <Gallery />
      {node.map((node, index) => {
        return (
          <div key={index}>
            <p>{node.name}</p>
            <GatsbyImage image={getImage(node)} alt="recipes" />
          </div>
        )
      })}
    </Layout>
  )
}

export default Testing
