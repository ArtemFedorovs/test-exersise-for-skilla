import {useState} from 'react'
import styles from './AudioPlayer.module.css';
import DownloadIcon from '../../icons/DownloadIcon.svg';
import PlayIcon from '../../icons/PlayIcon.svg';
import StopIcon from '../../icons/StopIcon.svg';
import CloseIcon from '../../icons/CloseIcon.svg';

type AudioPlayerType = {

  record_id: string,
  time:string,
 
}

export default function AudioPlayer(props: AudioPlayerType)  {

  function Enter(){ !audio&&fetchAudio(props.record_id)}

  let ctx: any;
  let playSound: any;

  function fetchAudio(record_id: string)   { 
    ctx = new   AudioContext();
    playSound=ctx.createBufferSource();
     fetch("https://api.skilla.ru/mango/getRecord?record="+record_id,{method: "POST", headers: {Authorization: "Bearer testtoken"}})
     .then(response=>{
       if(!response.ok){
        throw new Error(response.statusText)
       }
       return response
     })
     // .then(response=>{console.log(response)}) 
     .then((response:any)=> {  return  response.arrayBuffer() })
     .then((data:any)=> {return ctx.decodeAudioData(data)})
     
     .then((data)=>{
      playSound.buffer=data;
      playSound.connect(ctx.destination);
      setaudio(playSound);
      
      
     }) 

 };

const [audio, setaudio] = useState<any>(null) ; 
const [isPlay, setPlay] = useState<any>(false) ; 

function PlayStopToogle(){ 
  if (audio){
    !isPlay? audio.start(): audio.stop();
    setPlay(!isPlay);
  }
}


  return ( 
  <div className={styles.player} onMouseEnter={()=>{Enter()}}>
    <div className={styles.time} >{props.time}</div>
    <div className={styles.playStopButton} onClick={()=>{PlayStopToogle()}}><img className={styles.playIcon} src={isPlay?StopIcon:PlayIcon} /> </div>
    <div className={styles.progressLine} ></div>
    <div className={styles.iconForPlayer} ><img src={DownloadIcon} /></div>
    <div className={styles.iconForPlayer} ><img src={CloseIcon} /></div>
        
  </div>
  )
}
