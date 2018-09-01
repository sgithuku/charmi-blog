import React from "react";
import Helmet from "react-helmet";
import { Fade } from "react-reveal";
import Img from "gatsby-image";

// import Palette from "react-palette";
import config from "../../config/SiteConfig";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import styles from "./project.module.scss";

const Project = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const imageURL = project.cover.childImageSharp.sizes;
  if (!project.id) {
    project.id = slug;
  }
  return (
    <div className="container project-container">
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Container>
        <div className={styles.firstContent}>
          <Img sizes={imageURL} />
          <Fade down duration={1250} tag="h1" className={styles.title}>
            {project.title}
          </Fade>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postNode.html }}
        />
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Project;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        cover {
          childImageSharp {
            sizes(maxWidth: 1200) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
