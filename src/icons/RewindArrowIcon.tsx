import {useState} from 'react';


type ArrowIconPropsType = {
  direction: "Left" |  "Right"|"Bottom" |  "Top"
}

export default function RewindArrowIcon( props: ArrowIconPropsType) { 
    
  let arrowdirection:string='';
  if (props.direction  === "Right") {arrowdirection="rotate(180)"}  //left direction is a default state
  if (props.direction  === "Bottom") {arrowdirection="rotate(270)"} 
  if (props.direction  === "Top") {arrowdirection="rotate(90)"} 
  const [ArrowColor, setArrowColor] = useState('#ADBFDF')
  function Enter(){setArrowColor("#005FF8")};
  function Leave(){setArrowColor("#ADBFDF")};

  return (
    <svg style={{margin: "5px"}} onMouseEnter={()=>{Enter()}} onMouseLeave={()=>{Leave()}} transform={arrowdirection} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.175 8.825L2.35833 5L6.175 1.175L5 0L0 5L5 10L6.175 8.825Z" fill={ArrowColor}/>
    </svg>

  )
}
