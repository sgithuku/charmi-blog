import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
// import Palette from "react-palette";
import styles from "./ProjectListing.module.scss";

export default class ProjectListing extends React.PureComponent {
  getList() {
    const List = [];
    this.props.projectEdges.forEach(projectEdge => {
      List.push({
        path: projectEdge.node.fields.slug,
        cover: projectEdge.node.frontmatter.cover.childImageSharp.sizes,
        title: projectEdge.node.frontmatter.title,
        date: projectEdge.node.frontmatter.date,
        imageURL: projectEdge.node.frontmatter.cover.childImageSharp.sizes.src
      });
    });
    return List;
  }
  render() {
    const List = this.getList();
    return (
      <div className={styles.base}>
        {List.map(project => (
          <div key={project.path} className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Img sizes={project.cover} />
              </div>
              <Link
                to={project.path}
                key={project.path}
                className={styles.link}
              >
                <div className={styles.overlay}>
                  <Link
                    to={project.path}
                    key={project.path}
                    className={styles.link}
                  >
                    <div className={styles.positionFix}>
                      <h3 className={styles.title} key={project.title}>
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              </Link>
            </div>
            <Link to={project.path} key={project.path} className={styles.link}>
              <h3 className={styles.titleMobile} key={project.title}>
                {project.title}
              </h3>
            </Link>
            {/* <div className={styles.date} key={project.date}>
                {project.date}
              </div> */}
          </div>
        ))}
      </div>
    );
  }
}
