import React from 'react';
import ListItem from './ListItems';

const MusicList = ({charts}) => {
    
    const chartItems = charts.map((chart, index) => {
      return <ListItem chart={chart} key={index} position={index+1}/>
    })

  return (
    <div>
    <ul>
      {chartItems}
    </ul>
  </div>
  )
}

export default MusicList;