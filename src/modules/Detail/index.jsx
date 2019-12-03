import React from 'react';
import Zmage from 'react-zmage';

import styles from './style.scss';

export default class Detail extends React.Component {
  renderContent() {
    const set = [
      {
        // 图片 Url
        src: '/static/images/travel/1.png',
        // 图片占位文字
        alt: '图片的占位文字，作为图片的标题, 请尽量保持简短',
        // 图片样式
        style: { borderRadius: 30 },
        // 图片类名
        className: 'testClassName',
      },
      {
        // 图片 Url
        src: '/static/images/travel/2.png',
        // 图片占位文字
        alt: '图片的占位文字，作为图片的标题, 请尽量保持简短',
        // 图片样式
        style: { borderRadius: 30 },
        // 图片类名
        className: 'testClassName',
      },
      {
        // 图片 Url
        src: '/static/images/travel/10.png',
        // 图片占位文字
        alt: '图片的占位文字，作为图片的标题, 请尽量保持简短',
        // 图片样式
        style: { borderRadius: 30 },
        // 图片类名
        className: 'testClassName',
      },
      {
        // 图片 Url
        src: '/static/images/travel/4.png',
        // 图片占位文字
        alt: '图片的占位文字，作为图片的标题, 请尽量保持简短',
        // 图片样式
        style: { borderRadius: 30 },
        // 图片类名
        className: 'testClassName',
      },
    ];
    return (
      <div className={styles['content-container']}>
        <Zmage src="/static/images/travel/1.png" set={set} defaultPage={0} />
        <Zmage src="/static/images/travel/2.png" set={set} defaultPage={1} />
        <Zmage src="/static/images/travel/3.png" />
        <Zmage
          src="/static/images/travel/10.png"
          set={set}
          defaultPage={3}
          controller={{
          // 关闭按钮
            close: false,
            // 缩放按钮
            zoom: false,
            // 下载按钮
            download: false,
            // 旋转按钮
            rotate: false,
            // 翻页按钮
            flip: true,
            // 多页指示
            pagination: true,
          }}
        />
        <Zmage src="/static/images/travel/5.png" />
        <Zmage src="/static/images/travel/6.png" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={styles.jumbotron}>
          <img src="/static/images/travel/3.png" alt="" />
          <div className={styles['work-introduction']}>
            <h2 className={styles['work-title']}>那年夏天宁静的海</h2>
            <span className={styles['author-info']}>昕昕</span>
            <span className={styles['work-time']}>10 days ago</span>
          </div>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}
