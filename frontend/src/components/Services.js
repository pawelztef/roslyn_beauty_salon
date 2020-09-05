import React from 'react'
import EmptySpace from './EmptySpace'
import { TiHeart } from "react-icons/ti"
import Axios from 'axios'

class Services extends React.Component {
  state = {
    treatments_categories: {},
    isLoading: true
  }

  async componentDidMount() {
    const response = await Axios.get(process.env.REACT_APP_DOMAIN+'/treatments-categories') 
    const fetchedCategories = response.data
    const passedCategories = this.props.treatments_categories
    const newData = fetchedCategories.filter( category => passedCategories.some( (item) => item.name === category.name ) )
    this.setState({treatments_categories: newData, isLoading: false})
  }


  render() {
    const { title, call_to_action} = this.props
    let treatments_categories
    if(!this.state.isLoading) {
      treatments_categories = this.state.treatments_categories
    }

    return(
      <>
        <div className="pz-services__wrapper pz-hr-pd">
          <div className="pz-container-wrapper">
            <div className="pz-services__container">
              <h2 className="pz-section__header">{title}</h2>
            </div>
            <div className="pz-services">
              {!this.state.isLoading &&
                  treatments_categories.map( (category) => {
                    return(
                      <div key={category.id} className="pz-services__list">
                        <h4 className="pz-services-header">{category.name}
                          <span><TiHeart /></span>
                        </h4>
                        <ul className="pz-services-prices">
                          {
                            category.treatments.map((treatment) => {
                              return(
                                <li key={treatment.id}><a href="/services">{treatment.name}</a><br/><span>{treatment.price}€</span></li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  })
              }
            </div>
            <div className="pz-section__content">
              <a href={call_to_action.url} className="pz-btn">{call_to_action.phrase}</a>
            </div>
          </div>
        </div>
        <EmptySpace />
      </>
    )
  }
}

export default Services
