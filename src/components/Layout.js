import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {graphql, StaticQuery} from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({isPreloaded: false});
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const {children} = this.props;
    const {isPreloaded} = this.state;
    return (
    <StaticQuery
      query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <title>Łukasz Woźniak | Software Developer</title>
              <meta name="description" content="Łukasz Woźniak Software Developer personal website." />
              <meta name="keywords" content="Łukasz,Woźniak,Software,Developer,React,Redux,JavaScript,TypeScript,Node,homepage,personal,website" />
            </Helmet>
            <div
              className={isPreloaded ? ' main-body  is-preload' : ' main-body'}
            >
              <div id="page-wrapper">
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
