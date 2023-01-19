import React from 'react';
import ListItem from './ListItems';

const MusicList = ({charts}) => {
    
    const chartItems = charts.map((chart, index) => {
      return <ListItem chart={chart} key={index} position={index+1} songImage={chart['im:image'][1]['label'] } audio={chart.link[1].attributes.href}/>
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