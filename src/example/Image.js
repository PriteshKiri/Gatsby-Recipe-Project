import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
// import big from "../assets/images/big.jpg"

const Image = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/big.jpg" alt="big" />
      <h2>Gatsyby Image</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Image
