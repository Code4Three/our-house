import React, { Component } from 'react'

class UserCard extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <button
          onClick={this.props.decAction}
          style={{
            flexGrow: 1,
            height: '4rem',
            width: 'auto',
            backgroundColor: '#000000',
            color: '#ffffff',
            margin: '0',
            border: '0',
            padding: '1',
          }}
        >
          {`<`}
        </button>
        <h2
          style={{
            flexGrow: 4,
            height: '4rem',
            width: 'auto',
            backgroundColor: '#000000',
            color: '#ffffff',
            margin: '0',
            border: '0',
            padding: '0',
          }}
        >
          {this.props.user}
        </h2>
        <button
          onClick={this.props.incAction}
          style={{
            flexGrow: 1,
            height: '4rem',
            width: 'auto',
            backgroundColor: '#000000',
            color: '#ffffff',
            margin: '0',
            border: '0',
            padding: '1',
          }}
        >
          {`>`}
        </button>
      </div>
    )
  }
}

export default UserCard
