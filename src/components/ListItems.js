import React,{useEffect,useState,useRef} from 'react';
// import './ListItem.css';

const ListItems = ({chart,position,songImage,audio}) => {

    const [isPlaying, setIsPlaying] = useState(null)
    const audioSrc = useRef(null)

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        // skip play on mount
        if (isPlaying === null) return
        isPlaying ? audioSrc.current.play() : audioSrc.current.pause()
      }, [isPlaying])


  return (
    <li className="clickable-li">
        <p><b>Position:</b> {position}</p>
        <p><b>Title:</b> {chart['im:name']['label']}</p>
        <p><b>Artist:</b> {chart['im:artist']['label']}</p>
        <img id="song-image" src={songImage}/>
        <img
        // alt={"Play " + altTag}
        id={position}
        className={`audio-control ${isPlaying ? "playing" : ""}`}
        src='https://image.freepik.com/free-icon/play-button_318-42541.jpg'
        onClick={handlePlayPause}
        />
        <audio
        ref={audioSrc}
        id={'audio' + position}
        src={audio} 
      />
    </li>
  )
}

export default ListItems;