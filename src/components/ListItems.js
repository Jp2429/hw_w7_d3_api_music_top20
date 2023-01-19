import React from 'react';
// import './ListItem.css';

const ListItems = ({chart,position}) => {

  return (
    <li className="clickable-li">
        <p>Title: {chart['im:name']['label']}</p>
        <p>Artist: {chart['im:artist']['label']}</p>
        <p>Position: {position}</p>
    </li>
  )
}

export default ListItems;