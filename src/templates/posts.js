import React, { Component } from "react"
import Link from "gatsby-link"

class PostsTemplate extends Component {
  render() {
    const data = this.props.data
    return (
      <div>
        <h1>posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={"post/" + node.slug}>
              <div key={node.id}>{node.title}</div>
            </Link>
            <div
              className={"post-content"}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default PostsTemplate

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD,YYYY")
        }
      }
    }
  }
`
