import React, { Component } from 'react'
import { Link } from 'gatsby'

class HeaderNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ color: '#000000' }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs-by-user/" style={{ color: '#000000' }}>
              Jobs by User
            </Link>
          </li>
          <li>
            <Link to="/jobs-by-day/" style={{ color: '#000000' }}>
              Jobs by Day
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default HeaderNav
