import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styles from './style.scss';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home-page',
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    // const { current } = this.state;

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className={styles.menu}
      >
        <Menu.Item key="home-page">
          <Link to="/">
            <Icon type="home-page" />
              首页
          </Link>
        </Menu.Item>

        <Menu.Item key="albums">
          <Link to="/albums">
            <Icon type="album" />
              相册
          </Link>
        </Menu.Item>

        <Menu.Item key="progress">
          <Link to="/progress">
            <Icon type="progress" />
              历程
          </Link>
        </Menu.Item>

        <Menu.Item key="about">
          <Link to="/about">
            <Icon type="about" />
              关于
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
