import React, { Component } from 'react';
import Sky from 'react-sky';
import {Redirect} from 'react-router-dom';
import books from "../books.ico"
import books2 from "../books2.ico"
class Header extends Component {


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
      <header id="home" >

      <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: books,
            1: books2  /* You can pass as many images as you want */
          }}
          how={160} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'25px'} /* size of the rendered images */

        />


      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
           <li className="current">{this.renderRedirect1()}<a type = "button" className="smoothscroll" onClick = {this.setRedirect1}>Home</a></li>
          <li>{this.renderRedirect2()}<a  type = "button" className="smoothscroll" onClick = {this.setRedirect2}>Search</a></li>
        </ul>
      </nav>

      <div className="row banner">

         <div className="banner-text">
            <h1 className="responsive-headline">Public Libraries in the UK </h1>
            <h3>In this website you can find all libraries in a certain city of UK and specific information about them.</h3>
               <h3> You can also find how many libraries are there in a certain city.</h3>
            <hr />
         </div>
      </div>



   </header>
    );
  }
}

export default Header;
