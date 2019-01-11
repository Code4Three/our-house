import React, { Component } from 'react';

class DayCard extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexGrow: '30',
          minHeight: '4rem',
          width: 'auto',
          margin: '0.8rem 1.2rem',
          border: '1px solid var(--dark-grey)',
          borderRadius: '0.2rem',
          boxShadow: '0.5rem 0.5rem 0.8rem var(--shadow)',
          backgroundColor: 'var(--med-grey)',
        }}
      >
        <button
          onClick={this.props.decAction}
          style={{
            width: '2rem',
            margin: '0',
            border: '0',
            borderRadius: '0.2rem',
            padding: '0',
            backgroundColor: 'var(--med-grey)',
            color: '#ffffff',
          }}
        >
          {`<`}
        </button>
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: 'auto',
            margin: '0',
            border: '0',
            padding: '0',
            backgroundColor: 'var(--med-grey)',
            color: '#ffffff',
          }}
        >
          {this.props.day}
        </h2>
        <button
          onClick={this.props.incAction}
          style={{
            width: '2rem',
            margin: '0',
            border: '0',
            borderRadius: '0.2rem',
            padding: '0',
            backgroundColor: 'var(--med-grey)',
            color: '#ffffff',
          }}
        >
          {`>`}
        </button>
      </div>
    );
  }
}

export default DayCard;
