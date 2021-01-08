import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="google" content="notranslate" />
                    <link rel="stylesheet" href={safePrefix('assets/css/reset.css')}/>
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')}/>
                </Helmet>
                <Header {...this.props} />
                <div className="wrapper">
                  <div className="container">
                    {this.props.children}
                  </div>
                </div>
                <Footer {...this.props} />
            </React.Fragment>
        );
    }
}
