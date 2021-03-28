import React from 'react';
import InfoCard from './InfoCard.js'
import './styles/countryitem.css'


const CountryItem = props => {
  return (
    <div className="countryitem">
    	<div className="left"><span className="material-icons">
		flag
		</span>
		<p>{props.countryname}</p>
    </div>
        <div className="right"><span>{1 && props.confirmed ? props.confirmed : <InfoCard icon="done_all" bgcolor="#FFE600"/>}</span><span>{1 && props.deaths ? props.deaths : <InfoCard icon="dangerous" bgcolor="#FF5C00"/>}</span><span>{1 && props.recovered ? props.recovered : <InfoCard icon="local_hospital" bgcolor="#00DD3E"/>}</span></div>
    </div>
  );
};

export default CountryItem;
