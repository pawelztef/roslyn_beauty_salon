import React from 'react'

import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  matchPath
} from 'react-router-dom'

import Axios from 'axios'

import HomePage from './HomePage'
import ContactPage from './ContactPage'
import TeamPage from './TeamPage'
import GalleryPage from './GalleryPage'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import NotFound from './NotFound'
import renderPage from '../pagesMapping'
import TestPage from './TestPage'

class Page extends React.Component {

  state = {
    pages: [],
    isLoading: true
  }

  async componentDidMount() {
    const response = await Axios.get(process.env.REACT_APP_DOMAIN+'/pages') 
    const data = response.data
    this.setState({ pages: data, isLoading: false })
  }

  findPage() {
    if(!this.state.isLoading) {
      const pages = this.state.pages
      const notFound = { title: 'not_found', slug: 'not_found' }
      if(matchPath(this.props.match.url, { path: "/", exact: true })) {
        return pages.find( entry => entry.slug === "/" ) || notFound
      } else {
        return  pages.find( entry => entry.slug.replace(/^\//, '') === this.props.match.params.slug ) || notFound
      }
    }
  }

  render() {
    let page = false
    page = this.findPage()
    return(
      <>
        {page &&
            renderPage(page)
        }
      </>
    )
  }

}

export default withRouter(Page)
