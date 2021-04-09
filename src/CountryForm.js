import React, { Component } from 'react' 
import './styles/countryform.css'

class CountryForm extends Component {
  constructor(props) {
    
    super(props);
    /*
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 */
  }
/*
  handleChange(event) {
    this.setState({value: event.target.value});
  }
*/
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input placeholder="Search for a country..." className="country-searchbox" type="text" value={this.props.value} onChange={this.props.onChangeValue} />
        </label>
      </form>
    );
  }
}

export default CountryForm