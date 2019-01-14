import React from 'react';
import styles from './main-card.module.css';
import house from '../images/house.png';

class MainCard extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.mainImage} src={house} alt="Our House" />
      </div>
    );
  }
}

export default MainCard;
