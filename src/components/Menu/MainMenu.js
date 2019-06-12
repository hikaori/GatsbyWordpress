import React, { Component } from "react"
import Link from "gatsby-link"
import { useStaticQuery, graphql } from "gatsby"

const MainMenu = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
        wordpressWpApiMenusMenusItems {
          items {
            title
            url
            wordpress_children {
              url
              title
            }
          }
        }
      }
    `
  )
  const MenusItems = data.wordpressWpApiMenusMenusItems.items

  return (
    <div>
      <ul>
        {MenusItems.map(item => (
          <li key={item.object_slug}>
            <Link to={item.url}>{item.title}</Link>
            <ul>
              {item.wordpress_children &&
                item.wordpress_children.map(subitem => (
                  <li key={item.wordpress_id}>
                    <Link to={subitem.url}>{subitem.title}</Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainMenu
