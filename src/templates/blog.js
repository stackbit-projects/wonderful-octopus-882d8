import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class Blog extends React.Component {
    render() {
        let posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
            {htmlToReact(_.get(this.props, 'pageContext.html'))}
            <div className="blog">
              {_.map(posts, (post, post_idx) => (
              <div key={post_idx} className="post">
                <div className="post-inner">
                  {post.frontmatter.image_thumbnail && 
                  <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                    <img src={safePrefix(post.frontmatter.image_thumbnail)} alt={_.get(post, 'frontmatter.title')} />
                  </Link>
                  }
                  <div className="post-content">
                    <h2>
                      <Link to={safePrefix(_.get(post, 'url'))}>{post.frontmatter.title}</Link>
                    </h2>
                    <p>{post.frontmatter.excerpt}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
            </Layout>
        );
    }
}
