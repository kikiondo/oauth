import React, {Fragment, Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

import Header from './Header'

const Dashboard = () => <h2>Dashboard</h2>
const SuvervyNew = () => <h2>SuvervyNew</h2>
const Landinig = () => <h2>Landinig</h2>

class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path="/" component={Landinig} exact/>
            <Route path="/surveys" component={Dashboard} exact/>
            <Route path="/surveys/new" component={SuvervyNew} />
          </Fragment>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null,actions)(App) // Les pasamos las props