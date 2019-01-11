import React, { Component } from 'react';
import styles from './day-card.module.css';

class DayCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.buttons} onClick={this.props.decAction}>
          {`<`}
        </button>
        <h2 className={styles.title}>{this.props.day}</h2>
        <button className={styles.buttons} onClick={this.props.incAction}>
          {`>`}
        </button>
      </div>
    );
  }
}

export default DayCard;
