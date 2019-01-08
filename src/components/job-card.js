import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    return (
      <li
        style={{
          display: 'flex',
          flexGrow: '1',
          width: 'auto',
          margin: '0.8rem 1.2rem',
          border: '0',
          borderRadius: '0.2rem',
          border: '1px solid #121212',
          padding: '1',
          backgroundColor: 'var(--light-grey)',
          color: '#000000',
          boxShadow: '0.5rem 0.5rem 0.8rem var(--shadow)',
        }}
      >
        <h3>{this.props.user}</h3>
        <h4>{this.props.job}</h4>
      </li>
    );
  }
}

export default JobCard;
