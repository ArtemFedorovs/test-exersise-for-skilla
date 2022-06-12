import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './DatePicker.module.css';
import { ButtonDropdown,DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {useSelector, useDispatch} from 'react-redux';
import RewindArrowIcon from '../../icons/RewindArrowIcon';
import CalendarIcon from '../../icons/CalendarIcon';

export default function DatePicker() {

  const DateFilterOptions=[
    { name: "3 дня",
      value: {
        start: new Date(new Date().getTime()-(1000*60*60*24*3)),
        end: new Date()
      }
    },
    { name: "Неделя",
      value: {
        start: new Date(new Date().getTime()-(1000*60*60*24*7)),
        end: new Date()
      }
    },
    { name: "Месяц",
      value: {
        start: new Date(new Date().getTime()-(1000*60*60*24*30)),
        end: new Date()
      }
    },
    { name: "Год",
      value: {
        start: new Date(new Date().getTime()-(1000*60*60*24*365)),
        end: new Date()
      }
    },
    { name: "Указать даты",
      value: {
        start: new Date(new Date().getTime()-(1000*60*60*24*3)),
        end: new Date()
    }
    }
  ];

  const dispatch=useDispatch();
  const [isDropdown, setDropdown] = useState(false) ;  //State for visibility of dropdawn
  
  const [isCalendarHover, setCalendarHover] = useState(false)
  function Enter(){setCalendarHover(true)};
  function Leave(){setCalendarHover(false)};



  const ChosenFilter: ChosenFilterType = useSelector((state:any)=>state.Filter);
  type ChosenFilterType={
    typeFilter: string,
    periodFilterName:string,
    periodFilter: Array<string>
  }

  
function previousPeriodFilter(){
  let newIndex=0;
  DateFilterOptions.forEach((elem, index)=>{if (elem.name==ChosenFilter.periodFilterName){newIndex = index-1; if(newIndex==-1){newIndex=3} }}) ;  
  changePeriod(DateFilterOptions[newIndex]);
};
function nextPeriodFilter(){
  let newIndex=0;
  DateFilterOptions.forEach((elem, index)=>{if (elem.name==ChosenFilter.periodFilterName){newIndex = index+1; if(newIndex==4){newIndex=0} }}) ;  
  changePeriod(DateFilterOptions[newIndex]); 
};

function changePeriod (Period: any)  { //dispatch new periodFilter settings
  function dateFormatting(date: Date):string {return(date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2, "0")+'-'+String(date.getDate()).padStart(2, "0"))};
  dispatch({type: "DISPATCH CHOSEN PERIOD", payload: {name: Period.name, value: [dateFormatting(Period.value.start), dateFormatting(Period.value.end)]}});

}


  return (
    <div className={styles.datePicker}>
      <div onClick={()=>{previousPeriodFilter()}} className={styles.button_left}><RewindArrowIcon direction='Left'/></div>
      <ButtonDropdown   onMouseEnter={()=>{Enter()}} onMouseLeave={()=>{Leave()}} className={styles.picker_value} isOpen={isDropdown} toggle={() => setDropdown(!isDropdown)}>
        <DropdownToggle color="white" className={styles.dropdownHeader} >
          <CalendarIcon inlineStyle={{position: "relative", top: "-7px", left: "-10px",}} hover={isCalendarHover}/>
          <p className={styles.dropdownHeaderText}>{ChosenFilter.periodFilterName}</p>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[0])}}>
            <p className={styles.dropdownText}>{DateFilterOptions[0].name}</p>
          </DropdownItem>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[1])}}>
            <p className={styles.dropdownText}>{DateFilterOptions[1].name}</p>
          </DropdownItem>
          <DropdownItem  className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[2])}}>
            <p className={styles.dropdownText}>{DateFilterOptions[2].name}</p>
          </DropdownItem>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[3])}}>
            <p className={styles.dropdownText}>{DateFilterOptions[3].name}</p>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <div onClick={()=>{nextPeriodFilter()}} className={styles.button_right}><RewindArrowIcon direction='Right'/></div>
    </div>
  )
}

