import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class Link extends React.Component {
    render() {
        return (
            <Link to={this.props.page.frontmatter.button_link.url} className={_.get(this.props, 'classes')} target="blank">
              {this.props.page.frontmatter.button_link.title}
            </Link>
        );
    }
}
