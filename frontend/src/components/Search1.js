import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Results1 from './Results1';


class Search1 extends Component {
  componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      isSub: false,
      Data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  getData = () => {
    let city = this.state.city;
    const url = 'http://localhost:8080/library/api/Cities'
    fetch(url, {
      method:'POST',
      headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body:new URLSearchParams({
        'city':city
      })
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
    if(this.state.city.length !== 0 )
      this.getData()
    else
      alert("Please type a city")
  }

  render() {
    return (
      <section id="search" >
      <div className="row education">
      <div className="three columns header-col">
        <h1><span>Find a city's libraries</span></h1>
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
        <h4 style={{marginLeft:180}}>City</h4>
        <input   type='text' name='city' value = {this.state.city} placeholder = "Type a city..." onChange = {this.handleChange}/>
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
						{this.state.isSub && <Results1 results1={this.state.Data}/>}
					</div>
				</div>

      <div id="ser1" > </div>
      </section>
    );
  }
}

export default Search1;
