import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          name
          age
        }
        person {
          age
          name
        }
      }
    }
  }
`
const Fetchdata = () => {
  const data = useStaticQuery(getData)
  const usedata = data.site.siteMetadata
  return <div>{usedata.title}</div>
}

export default Fetchdata
