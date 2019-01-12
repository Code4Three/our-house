import React from 'react';
import H2Card from './h2-card.js';
import styles from './main-card.module.css';
import house from '../images/house.png';

class MainCard extends React.Component {
  render() {
    return (
      <div>
        <H2Card title="2914" />
        <div className={styles.container}>
          <img className={styles.mainImage} src={house} alt="Our House" />
        </div>
      </div>
    );
  }
}

export default MainCard;
