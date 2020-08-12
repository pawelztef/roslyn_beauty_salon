import React from 'react'

import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import Axios from 'axios'

import HomePage from './HomePage'
import ContactPage from './ContactPage'
import TeamPage from './TeamPage'
import GalleryPage from './GalleryPage'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import NotFound from './NotFound'

class Page extends React.Component {

  state = {
    pages: [],
    isLoading: true
  }

  async componentDidMount() {
    const resp = await Axios.get(process.env.REACT_APP_DOMAIN + '/pages' )
    const pages = resp.data
    this.setState({
      pages,
      isLoading: false
    }) 
  }

  renderComponents = (page, mapper) => {

  }

  render() {
    let pg = false
    if(!this.state.isLoading) {
      const pages = this.state.pages
      pg = pages.find( entry => entry.slug.replace(/^\//, '') === this.props.match.params.slug ) || false
    }
    return(
      <>
        {pg ? (
          <h3>{pg.title}</h3>
        ):(
          <NotFound />
        )}
      </>
    )
  }

}

export default withRouter(Page)
