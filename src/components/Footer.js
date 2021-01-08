import React from 'react';
import _ from 'lodash';

import {safePrefix, Link} from '../utils';
import MenuSecondary from './MenuSecondary';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
              <div className="footer-inner">
              <div className="footer-logo"><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.footer.logo_img'))} alt="logo"/></div>
              <div className="footer-menu">
                {_.get(this.props, 'pageContext.menus.secondary') && 
                  <MenuSecondary {...this.props} />
                }
              </div>
              <div className="footer-socials">
                  {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.socials'), (item, item_idx) => (
                    <Link key={item_idx} to={_.get(item, 'url')} target="blank"><i className={'fa fa-' + _.get(item, 'element')}/></Link>
                  ))}
              </div>
              <div className="footer-copy">
                <p>{_.get(this.props, 'pageContext.site.siteMetadata.footer.content')}</p>
              </div>
              </div>
            </footer>
        );
    }
}
