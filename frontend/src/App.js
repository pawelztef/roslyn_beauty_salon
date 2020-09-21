import React from 'react'
import './assets/sass/main.sass'
import { CSSTransition, TransitionGroup, } from 'react-transition-group'


import { 
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import Page from './components/Page'


class App extends React.Component {



  render() {
    return (
      <Router>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{enter: 300, exit: 300}}
              classNames="fade"
            >
              <ScrollToTop >
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
              </ScrollToTop >
            </CSSTransition>
          </TransitionGroup>
        )} />
    </Router>
    )
  }
}

export default App
