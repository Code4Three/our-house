import React, { Component } from 'react';
import tstyles from './day-card.module.css';

class DayCard extends Component {
  render() {
    return (
      <div className={tstyles.container}>
        <button className={tstyles.buttons} onClick={this.props.decAction}>
          {`<`}
        </button>
        <h2 className={tstyles.title}>{this.props.day}</h2>
        <button className={tstyles.buttons} onClick={this.props.incAction}>
          {`>`}
        </button>
      </div>
    );
  }
}

export default DayCard;
