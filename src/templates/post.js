import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, Link} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <h1>{this.props.pageContext.frontmatter.title}</h1>
              {htmlToReact(_.get(this.props, 'pageContext.html'))}
              <Link to={this.props.pageContext.frontmatter.button_link.url} className="button inverse" target="blank">
                  {this.props.pageContext.frontmatter.button_link.title}
              </Link>
            </Layout>
        );
    }
}
