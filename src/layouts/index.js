import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import Nav from 'components/Nav'
import theme from 'style/theme'
import Blur from 'lib/components/Blur'

import 'style/global.css'

class TemplateWrapper extends React.Component {
  state = {
    open: false,
  }

  toggle = () => this.setState(state => ({ open: !state.open }))

  render() {
    const meta = this.props.data.site.siteMetadata
    const links = this.props.data.menuLinksYaml.links;
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            titleTemplate={`%s | ${meta.title}`}
            defaultTitle={meta.title}
          >
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords.join(',')} />
            <html lang="en" />
            {/* sets up twitter to display every page as a card with default info */}
            <meta name="twitter:card" content="summary" />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
          </Helmet>
          <Nav links={links} toggle={this.toggle} open={this.state.open} />
          <Blur blurred={this.state.open}>{this.props.children()}</Blur>
        </div>
      </ThemeProvider>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        keywords
        description
      }
    }
    menuLinksYaml {
      links {
        path
        copy
        url
        color
      }
    }
  }
`

export default TemplateWrapper
