import { Route } from 'react-router-dom';
import React from 'react';
import HomePage from '../../HomePage';
import Albums from '../../Albums';
import Detail from '../../Detail';

const Progress = () => <h2>Progress</h2>;

const About = () => <h2>About</h2>;

export default class Content extends React.PureComponent {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/albums" component={Albums} />
        <Route path="/progress" component={Progress} />
        <Route path="/about" component={About} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    );
  }
}
