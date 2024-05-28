import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>Left Content</div>
      <div className={styles.center}>Center Content</div>
      <div className={styles.right}>Right Content</div>
      <div className={styles.bottomLeft}>Bottom Left Content</div>
      <div className={styles.bottomCenter}>Bottom Center Content</div>
      <div className={styles.bottomRight}>Bottom Right Content</div>
    </div>
  );
};

export default Navbar;
