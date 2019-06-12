import React, { Component } from "react"
import Link from "gatsby-link"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "./MainMenu.css"

const MainMenu = () => {
  const MenuSection = styled.ul`
    display: flex;
    margin-left: 0;
    justify-content: flex-end;
  `
  const Menu = styled.li`
    padding: 0.5rem 0.75rem;
  `
  const MenuSubSection = styled.ul`
    margin-left: 0;
    position: absolute;
    text-transform: none;
  `

  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
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
      <MenuSection>
        {MenusItems.map(item => (
          <Menu key={item.object_slug}>
            <Link to={item.url}>{item.title}</Link>
            <MenuSubSection className="close">
              {item.wordpress_children &&
                item.wordpress_children.map(subitem => (
                  <li key={item.wordpress_id}>
                    <Link to={subitem.url}>{subitem.title}</Link>
                  </li>
                ))}
            </MenuSubSection>
          </Menu>
        ))}
      </MenuSection>
    </div>
  )
}

export default MainMenu
