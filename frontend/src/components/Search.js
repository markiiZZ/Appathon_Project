import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import Sky from 'react-sky';
import {Redirect} from 'react-router-dom';
import books from "../books.ico"
import books2 from "../books2.ico"



class Search extends Component {

  state = {
      redirect1: false,
      redirect2: false,
      city:      false,
      library:   false,
      libcity:   false
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

    setcity = () => {
      this.setState({
        city: true
      })
    }

    rendercity = () => {
      if (this.state.city) {
        return <Redirect to='/search1' />
      }
    }

    setlibrary = () => {
      this.setState({
        library: true
      })
    }

    renderlibrary = () => {
      if (this.state.library) {
        return <Redirect to='/search2' />
      }
    }

    setlibcity = () => {
      this.setState({
        libcity: true
      })
    }

    renderlibcity = () => {
      if (this.state.libcity) {
        return <Redirect to='/search3' />
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
      <section id="search" >
      {this.renderRedirect1()}
      {this.renderRedirect2()}
      {this.rendercity()}
      {this.renderlibrary()}
      {this.renderlibcity()}


      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
           <li className="current"><a type = "button" className="smoothscroll" onClick = {this.setRedirect1}>Home</a></li>
          <li><a  type = "button" className="smoothscroll" onClick = {this.setRedirect2}>Search</a></li>
        </ul>
      </nav>

      <div className="row education">
      <div className="three columns header-col">
        <h1><span>What do you want to search ?</span></h1>
      </div>


        <div style={{marginLeft:1000}}>
        <input type="button" value="Numbers" onClick= {this.setlibcity} />
        <input type="button" value="City" onClick= {this.setcity} />
        <input type="button" value="Library" onClick= {this.setlibrary} />
        </div>

      </div>

      <div id="res" > </div>
      </section>
    );
  }
}

export default Search;
