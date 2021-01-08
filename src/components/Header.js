import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';
import Menu from './Menu';

export default class Header extends React.Component {
    render() {
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
            <header className="site-header" id="header">
              <div className="site-header-inner">
              <div className="site-branding">
                <Link to="/"><img className="site-logo" src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))}/></Link>
              </div>
              <button className="site-hamburger" id="hamburger">
                <span />
                <span />
                <span />
              </button>
              {_.get(this.props, 'pageContext.menus.main') && 
              <nav className="site-navigation">
                <Menu {...this.props} menu={menu} page={this.props.pageContext} />
              </nav>
              }
              </div>
            </header>
        );
    }
}
