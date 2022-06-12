import React, {useState} from 'react'
import styles from './CallLine.module.css';
import ArrowIcon from '../../icons/CallArrowIcon';
import Webicon from '../../icons/Webicon.svg';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

type CallLineType = {
  key: number,
  in_out: number,
  status: "Не дозвонился" |  "Дозвонился",
  date: string,
  person_avatar?: string,
  from_site?: number,
  source?: string,
  score?: string,  //didnt found in API
  time: number,
  contact_name?: string,
  contact_company?: string,
  from_number?: string,
  to_number?: string,
  record?: string,

}

export default function CallLine(props: CallLineType)  {

  function formatTime(time: number):string{
   let hours= Math.floor(time/60/60);
   let minutes=Math.floor(time/60) - (hours * 60);
   let seconds=(time % 60).toString().padStart(2, '0');;
   return  (hours?hours+":":" ")+minutes + ':' + seconds 
  } ;

  let clientInfo: Array<string> =[];   //compose client info in 1 array
  props.contact_name && clientInfo.push(props.contact_name);
  props.contact_company && clientInfo.push(props.contact_company);
  props.in_out && props.from_number && clientInfo.push(props.from_number);
  !props.in_out && props.to_number && clientInfo.push(props.to_number);



  return ( 
    <div className={styles.callLine}>
      <div className={styles.arrow}><ArrowIcon in_out={props.in_out} status={props.status}/></div>
      <div className={styles.time_of_call}>{props.date.slice(11, 16)}</div>
      {props.person_avatar? <img src={props.person_avatar} alt=" " className={styles.person_avatar}/>:<div className={styles.person_avatar}></div>}
      {props.from_site? <img src={Webicon} className={styles.from_site}/>:<div className={styles.from_site}></div>}
      <div className={styles.client_info}>
        <div className={styles.client_info__first_line}>{clientInfo[0]}</div>
        <div className={styles.client_info__second_line}>{clientInfo[1]}</div>
      </div>
      <div className={styles.source}>{props.source}</div>
      <div className={styles.score}>{props.score}</div>
      <div className={styles.time}>
        {props.record?<AudioPlayer record_id={props.record} time={formatTime(props.time)}/>:formatTime(props.time)}
      </div>
    </div>
  )
}
