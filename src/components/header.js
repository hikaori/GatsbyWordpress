import PropTypes from "prop-types"
import React from "react"
import MainMenu from "./Menu/MainMenu"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "COS_Educational_Consulting_Inc.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Img fixed={query.file.childImageSharp.fixed} />
          </Link>
        </h1>
        <MainMenu />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
