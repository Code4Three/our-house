import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    return (
      <li
        style={{
          display: 'flex',
          height: '4rem',
          width: 'auto',
          backgroundColor: '#aaaaaa',
          color: '#000000',
        }}
      >
        <h3>{this.props.user}</h3>
        <h4>{this.props.job}</h4>
      </li>
    );
  }
}

export default JobCard;
