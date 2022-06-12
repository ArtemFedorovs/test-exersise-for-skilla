


type ArrowIconPropsType = {
  in_out: number,  
  status: "Не дозвонился" |  "Дозвонился"
}

export default function СallArrowIcon( props: ArrowIconPropsType) { 
    let arrowcolor:string='';
    let arrowdirection:string='';
    if (props.in_out===1 && props.status === "Дозвонился") {arrowcolor="#005FF8"; arrowdirection="rotate(180)";}  //blue dawn arrow
    else if (props.in_out===1 && props.status === "Не дозвонился") {arrowcolor="#EA1A4F"; arrowdirection="rotate(180)";} //red dawn arrow
    else if (props.in_out===0 && props.status === "Дозвонился") {arrowcolor="#28A879"; }//green up arrow
    else if (props.in_out===0 && props.status === "Не дозвонился") {arrowcolor="#EA1A4F";}//red up arrow
    else return<></>  //in case is something wrong we return no arrow
     

  return (
    <svg width="13" height="13" viewBox="0 0 13 13" transform={arrowdirection} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-1.04904e-05 11.3447L1.17703 12.5217L10.8522 2.8466L10.8522 8.34782H12.5217L12.5217 -1.04904e-05L4.1739 -1.04904e-05V1.66955L9.67512 1.66955L-1.04904e-05 11.3447Z" fill={arrowcolor}/>
    </svg>
    
  )
}
