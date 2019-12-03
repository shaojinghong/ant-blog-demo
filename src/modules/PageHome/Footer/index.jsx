import React from 'react';
import styles from './style.scss';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className={styles.footer}>
        <span>© 2019 By Mr.Jinghong & Ms.Qixin</span>
      </div>
    );
  }
}
