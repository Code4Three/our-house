import React from 'react';
import styles from './main-card.module.css';
import mainImage from '../images/hugo.png';

class MainCard extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {/*<img className={styles.mainImage} src={mainImage} alt="Our House" />*/}
      </div>
    );
  }
}

export default MainCard;
