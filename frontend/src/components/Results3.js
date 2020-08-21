import React, { Component } from 'react';
var shortid = require('shortid');

class Results3 extends Component {
    componentDidMount(){
        (console.log("here",Object.values(this.props.results3)[0]))
    }
    render(){
      if (!Object.values(this.props.results3)[0]) {
    return (
      <p></p>
    )
  }
  else {
    return (
      <div>
        <div className="row education">
        <div className="one columns header-col">
            <h1><span>Results</span></h1>
        </div>
        <div className="nine columns main-col">
        <div className="row item">
        <div className="two columns">
          <table >
            <thead className="thead-dark">
              <tr>
                <th scope="col">City </th>
                <th scope="col">LIbraries</th>

              </tr>
            </thead>
            <tbody>
            {Object.values(this.props.results3)[0].map(item => (
              <tr key={shortid.generate()}>
                <td>{item.cityname}</td>
                <td>{item.libraries}</td>
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

export default Results3;
