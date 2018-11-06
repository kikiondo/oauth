import React, {Component} from 'react'
import { connect } from 'react-redux'

// Pasar a class function
class Header extends Component {
  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with google</a></li>
      default: <li><a>Logout</a></li>
    }
  } 
  
  render(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              {this.renderContent()}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({auth}) {
  return {auth}
}

export default connect(mapStateToProps)(Header)

// 26 noviembre
// tarde 4, 