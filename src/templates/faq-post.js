import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";

export default ({ data }) => {
  const faq = data.markdownRemark;
  console.log(faq);
  return (
    <Layout>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {faq.frontmatter.title}
              </h1>
              <HTMLContent content={faq.html} />
            </div>
            <Link to={`/faq/`}>Back to all FAQs</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export const pageQuery = graphql`
  query FAQPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
