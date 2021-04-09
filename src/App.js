import './App.css';
import InfoCard from './InfoCard.js'
import React, { Component } from 'react'
import Topbar from './Topbar.js'
import CountryForm from './CountryForm.js'


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
        data: [],
        countries: false,
        value: []
    }
  }

  searchCountry() {
    fetch('https://covid19.mathdro.id/api/countries/'+this.state.value).then(response => {
      if (!response.ok){
          return 0;
        }

      return response.json()

    })
      .then(result => {
        this.setState({
          countries: result,
        });
      })
  }

  componentDidMount(){
    fetch('https://covid19.mathdro.id/api').then(response => response.json())
    .then(result => {
      this.setState({
        data: result,
      });
    })

  }

  onChangeValueHandler = (val) => {
    this.setState({ value: val.target.value })         
    setTimeout(()=>{this.searchCountry(val.target.value);},0)
  }

  render() {
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
          <div className="card">
            <div className="search-container">
              <CountryForm value={this.state.value} onChangeValue={this.onChangeValueHandler} />
            </div>
            <div className="card-holder">
            {this.state.countries ?
              <div className="card-holder">
              <InfoCard className="countryConfirmed" icon="done_all" text="Confirmed:" value={this.state.countries && this.state.countries.confirmed ? addComas(this.state.countries.confirmed.value) : "-"} bgcolor="#FFE600"/>
            <InfoCard className="countryDeaths" icon="dangerous" text="Deaths:" value={this.state.countries && this.state.countries.deaths ? addComas(this.state.countries.deaths.value) : "-"} bgcolor="#FF5C00"/>
            <InfoCard className="countryRecovered" icon="local_hospital" text="Recovered:" value={this.state.countries && this.state.countries.recovered ? addComas(this.state.countries.recovered.value) : "-"} bgcolor="#00DD3E"/>
          </div>
          : <p className="alert"><span className="material-icons">
info
</span>{this.state.countries===false ? "Start typing to see country stats" : "Country Not Found"}</p>
          }
            
          
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
