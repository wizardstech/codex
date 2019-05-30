import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ArticleTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.strapiArticle.title} />
    <h1>{data.strapiArticle.title}</h1>
    <p>by <Link to={`/authors/${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
    <p>{data.strapiArticle.content}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      author {
        id
        username
      }
    }
  }
`
