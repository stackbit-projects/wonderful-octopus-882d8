import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <h1>{this.props.pageContext.frontmatter.heading}</h1>
              {htmlToReact(_.get(this.props, 'pageContext.html'))}
            </Layout>
        );
    }
}
