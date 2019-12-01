import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import View from "../components/View"
import Status from "../components/Status"

const Index = () => (
  <Layout>
    <Status />
    <View title="Firebase Simple Authentication Example">
      <p>
        This is a simple example of creating dynamic apps with Gatsby that
        require user authentication using Firebase as authentication provider. It uses concepts from the
        {` `}
        <a href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/">
          client-only routes section
        </a>
        {` `} and {` `}
        <a href="https://www.gatsbyjs.org/tutorial/authentication-tutorial">
          making a site with user authentication
        </a>
        {` `}
        from official gatsby doc
      </p>
      <p>
        Imagine this is the home of your gatsby project and a user decide to go to his profile page: 
        {` `}
        <Link to="/app/profile">your profile</Link>.
      </p>
    </View>
  </Layout>
)

export default Index
