import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class MenuSecondary extends React.Component {
    render() {
        return (
            <ul>
              {_.map(_.get(this.props, 'pageContext.menus.secondary'), (item, item_idx) => (
              <li key={item_idx} {...((_.get(item, 'url') === _.get(this.props, 'pageContext.url')) ? {className: 'active'} : null)}>
                <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
              </li>
              ))}
            </ul>
        );
    }
}
