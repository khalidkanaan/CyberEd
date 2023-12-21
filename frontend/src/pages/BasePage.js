import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/BasePage.css';

class BasePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BasePage;
