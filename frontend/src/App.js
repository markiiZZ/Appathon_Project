import React, { Component } from 'react';
import { HashRouter as Router, BrowserRouter, Route, Switch  } from "react-router-dom";
import {Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Search1 from './components/Search1';
import Search2 from './components/Search2';
import Search3 from './components/Search3';
import {Navbar} from 'reactstrap';

class App extends Component {


  state = {
      redirect1: false,
      redirect2: false
    }
    setRedirect2 = () => {
      this.setState({
        redirect2: true
      })
    }
    renderRedirect2 = () => {
      if (this.state.redirect2) {
        return <Redirect to='/search' />
      }
    }

    setRedirect1 = () => {
      this.setState({
        redirect1: true
      })
    }
    renderRedirect1 = () => {
      if (this.state.redirect1) {
        return <Redirect to='/' />
      }
    }

  render() {
    return (


      <BrowserRouter>
    <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Header}/>
            <Route path="/search" component={Search} />
            <Route path="/search1" component={Search1} />
            <Route path="/search2" component={Search2} />
            <Route path="/search3" component={Search3} />
            <Route path="/*" component={Header} />
        </Switch>
    </div>
</BrowserRouter>

  );
  }
}
export default App;
