import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import Swipe from 'swipe-js-iso';

import styles from './style.scss';

export default class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    Swipe(this.myRef.current, {
      startSlide: 2,
      speed: 400,
      widthOfSiblingSlidePreview: 10,
      auto: 3000,
      continuous: true,
      disableScroll: false,
      stopPropagation: false,
    });
  }

  renderCards() {
    return (
      <div className={styles['cards-container']}>
        <Link to="/detail/3251" className={styles.card}>
          <Card
            hoverable
            cover={<img alt="example" src="/static/images/travel/1.png" />}
          >
            <Card.Meta title="那年夏天宁静的海" description="厦门之旅" />
          </Card>
        </Link>
        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src="/static/images/travel/2.png" />}
        >
          <Card.Meta title="那片森林里的绿色巴士" description="武汉巴士咖啡厅" />
        </Card>
        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src="/static/images/travel/3.png" />}
        >
          <Card.Meta title="重庆森林 港风写真" description="致敬王家卫" />
        </Card>
        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src="/static/images/travel/4.png" />}
        >
          <Card.Meta title="海盗船长的故事" description="列车电台" />
        </Card>
        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src="/static/images/travel/5.png" />}
        >
          <Card.Meta title="海盗船长的故事" description="列车电台" />
        </Card>
        <Card
          hoverable
          className={styles.card}
          cover={<img alt="example" src="/static/images/travel/6.png" />}
        >
          <Card.Meta title="海盗船长的故事" description="列车电台" />
        </Card>
      </div>
    );
  }

  render() {
    return (
      <div className="page-container">
        <div className={styles.header}>
          {/* <h2 className={styles['header-title']}>梦如少年丛， 歌舞匆匆</h2>
           */}
          <div className={styles.swipe} ref={this.myRef}>
            <div className={styles['swipe-wrap']}>
              <div className={styles['swipe-item']}>
                <img src="/static/images/travel/5.png" alt="" />
                <span className={styles.title}>东京街头，独行的人 | Keiichi Ichikawa ​​​​</span>
              </div>
              <div className={styles['swipe-item']}>
                <img src="/static/images/travel/6.png" alt="" />
                <span className={styles.title}>东京街头，独行的人 | Keiichi Ichikawa ​​​​</span>
              </div>
              <div className={styles['swipe-item']}>
                <img src="/static/images/travel/7.png" alt="" />
                <span className={styles.title}>东京街头，独行的人 | Keiichi Ichikawa ​​​​</span>
              </div>
            </div>
          </div>
        </div>
        { this.renderCards() }
      </div>
    );
  }
}
