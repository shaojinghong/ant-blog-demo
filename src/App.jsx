import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Header, Content, Footer } from './modules/PageHome';
import './scss/main.scss';

const {
  Header: LayoutHeader,
  Content: LayoutContent,
} = Layout;


class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Layout>
          <LayoutHeader>
            <Header />
          </LayoutHeader>
          <Layout>
            <LayoutContent>
              <Content />
            </LayoutContent>
          </Layout>
          <Footer />
        </Layout>
      </Router>
    );
  }
}

export default hot(App);
