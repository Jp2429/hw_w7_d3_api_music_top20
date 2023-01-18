import React from 'react';
// import './ListItem.css';

const ListItems = ({chart,position}) => {
    console.log(chart)
//   const handleClick = function() {
//     console.log(`Clicked on ${country.name.common}`);
//     // onCountryClicked(country);
//     onCountryClicked(country);
//   }

  return (
    <li className="clickable-li">
        <p>Title: {chart['im:name']['label']}</p>
        <p>Artist: {chart['im:artist']['label']}</p>
        <p>Position: {position}</p>
    </li>
  )
}

export default ListItems;