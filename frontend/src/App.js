import React from 'react'
import './assets/sass/main.sass'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import Footer from './components/Footer'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import Page from './components/Page'


class App extends React.Component {



  render() {
    return (
      <Router>
        <div className="pz-body-wrapper">
          <div className="pz-page-wrapper">

            <Navigation />

            <Switch>
              <Route exact path="/" component={Page} />
              <Route path='/:slug' component={Page} />
              <Route component={NotFound} />
            </Switch>

            <Footer />

          </div>
        </div>
      </Router>
    )
  }
}

export default App
