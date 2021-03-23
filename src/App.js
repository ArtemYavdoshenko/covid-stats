import './App.css';
import InfoCard from './InfoCard.js'
import React, { Component } from 'react'
import Topbar from './Topbar.js'

Array.prototype.insert = function ( index, item ) {
  this.splice( index, 0, item );
};

function addComas(text){
  let newText = text.toString().split("").reverse();
  for (let i=3; i<newText.length; i+=4){
    newText.insert(i, ",")
  }
  return newText.reverse().join("");
}

export class App extends Component {
  constructor(){
    super();
    this.state = {
        data: []
    }
  }

  componentDidMount(){
    console.log("componentDidMount got called")
    fetch('https://covid19.mathdro.id/api').then(response => response.json())
    .then(result => {
      this.setState({
        data: result,
      });
      console.log("setState got called")
    })
  }

  render() {
    console.log("Render got called")
    return (
      <div>
        <div className="App">
          <Topbar/>
          <div className="card">
            <h2>
              <span className="material-icons">
              public
              </span>
              Worldwide
            </h2>
            <div className="card-holder">
            <InfoCard icon="done_all" text="Confirmed:" value={this.state.data && this.state.data.confirmed ? addComas(this.state.data.confirmed.value) : "Not loaded yet"} bgcolor="#FFE600"/>
            <InfoCard icon="dangerous" text="Deaths:" value={this.state.data && this.state.data.deaths ? addComas(this.state.data.deaths.value) : "Not loaded yet"} bgcolor="#FF5C00"/>
            <InfoCard icon="local_hospital" text="Recovered:" value={this.state.data && this.state.data.recovered ? addComas(this.state.data.recovered.value) : "Not loaded yet"} bgcolor="#00DD3E"/>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default App
