import React, { Component } from 'react';
var shortid = require('shortid');

class Results1 extends Component {
    componentDidMount(){
        (console.log("here",Object.values(this.props.results1)[0]))
    }
    render(){
      if (!Object.values(this.props.results1)[0]) {
    return (
      <p></p>
    )
  }
  else {
    return (
      <div>
        <div className="row education">
        <div className="three columns header-col">
            <h1><span>Results</span></h1>
        </div>
        <div className="nine columns main-col">
        <div className="row item">
        <div className="twelve columns">
          <table >
            <thead className="thead-dark">
              <tr>
                <th scope="col">Library </th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
            {Object.values(this.props.results1)[0].map(item => (
              <tr key={shortid.generate()}>
                <td>{item.libname}</td>
                <td>{item.cityname}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
          </div>
            </div>
              </div>
                </div>
    )
  }
  }
}

export default Results1;
