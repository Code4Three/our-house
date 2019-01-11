import React, { Component } from 'react';

class JobCard extends Component {
  render() {
    return (
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexGrow: '1',
          width: 'auto',
          margin: '0.8rem 1.2rem 0 1.2rem',
          padding: '0.4rem 2rem 0.4rem 0.8rem',
          border: '1px solid #121212',
          borderRadius: '0.2rem',
          backgroundColor: 'var(--light-grey)',
          color: '#000000',
          boxShadow: '0.5rem 0.5rem 0.8rem var(--shadow)',
        }}
      >
        <h3 style={{ alignSelf: 'top', color: 'var(--dark-grey)' }}>
          {this.props.user}
        </h3>
        <h4 style={{ alignSelf: 'flex-end' }}>{this.props.job}</h4>
      </li>
    );
  }
}

export default JobCard;
