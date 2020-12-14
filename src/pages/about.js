import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About Blog Boost Starter" />
      <div id="about">
        <h2>About World News</h2>
        <p>
          <strong>It is built with Netlify CMS, Gatsby, React</strong>
        </p>

        <p>
          This News portal is a great way to post news with Netlify CMS, which
          is easy to use
        </p>
      </div>
    </Layout>
  )
}
export default AboutPage
