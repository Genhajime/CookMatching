import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BottomNav from './BottomNav';
import SignIn from './SignIn';
import {users} from '../../data/data';

import Home from './Home';
import Search from './Search';
import NewPost from './NewPost';
import Profile from './Profile';
import Header from './Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session : true,
      id: 1,
      name: 'taro',
      email: 'taro@example.com',
      image: 'src/img/users/taro.jpg',
      follows: [2, 3],

    };
  }

  loginConfirm = (name, password) => {
    for (let user of users) {
      if (name===user.name && password===user.password) {
        this.setState( {session: true} );
        this.setState( {id: user.id} );
        return;
      }
    }
    console.log('Login Failed!');
  }

  render() {
    return (
      this.state.session? (
        <BrowserRouter>
          <Header />
          <Switch> 
            <Route exact path={'/'} render={() => <Home id={this.state.id} />} />
            <Route exact path={'/search'} component={Search} />
            <Route exact path={'/newpost'} render={() => <NewPost id={this.state.id} />} />
            <Route exact path={'/profile'} render={() => <Profile id={this.state.id} />} />
          </Switch>
          <BottomNav />
        </BrowserRouter>
      ) : (
        <SignIn handleSubmit={this.loginConfirm}/>
      )
    )
  }
}