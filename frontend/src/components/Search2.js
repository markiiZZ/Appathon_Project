import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Results2 from './Results2';
import {Redirect} from 'react-router-dom';

class Search2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      library: '',
      isSub: false,
      Data: [],
      redirect1: false,
      redirect2: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  getData = () => {
    let library = this.state.library;
    const url = 'http://localhost:8080/library/api/Libraries'
    fetch(url, {
      method:'GET',
      headers:{
        'name':library
      }
    })
      .then(response => response.json())
      .then(
        (json) => {
          this.setState({
				Data: json,
				isSub: true,
			});})
      .catch((error) => {
			console.error(error);
		});
    }

      //.then((res) => {ReactDOM.render(<Results results={res} />, document.getElementById('res'))})



  handleChange (event)  {
    const target = event.target;
    this.setState({[target.name]: target.value})
  }
  handleSubmit (event){
    event.preventDefault();
    if(this.state.library.length !== 0 )
      this.getData()
    else
      alert("Please type a library")
  }

  render() {
    return (

      <section id="search" >
      {this.renderRedirect1()}
      {this.renderRedirect2()}

      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
           <li className="current"><a type = "button" className="smoothscroll" href = '#' onClick = {this.setRedirect1}>Home</a></li>
          <li><a  type = "button" className="smoothscroll" href = '#' onClick = {this.setRedirect2}>Search</a></li>
        </ul>
      </nav>

      <div className="row education">
      <div className="three columns header-col">
        <h1><span>Find a library's libraries</span></h1>
      </div>
      <div className="nine columns main-col">
      <div className="row item">
      <div className="twelve columns">
      <br/>
      <form onSubmit = {this.handleSubmit}>
        <table>
        <tbody >
        <tr>
        <td >
        <h4 style={{marginLeft:180}}>Library</h4>
        <input   type='text' name='library' value = {this.state.library} placeholder = "Type a library..." onChange = {this.handleChange}/>
        <br/>
        <div style={{marginLeft:200}}>
        <input type="submit" value="Submit"  />
        </div>
        </td>
        </tr>
        </tbody>
        </table>
      </form>
      </div>
      </div>
      </div>
      </div>

      <div>
					<div>
						{this.state.isSub && <Results2 results2={this.state.Data}/>}
					</div>
				</div>

      <div id="ser1" > </div>
      </section>
    );
  }
}

export default Search2;
