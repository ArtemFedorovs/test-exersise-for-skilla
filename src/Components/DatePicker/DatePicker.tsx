import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './DatePicker.module.css';
import {ButtonDropdown,DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

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
    { name: "Даты",
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
  DateFilterOptions.forEach((elem, index)=>{if (elem.name==ChosenFilter.periodFilterName){newIndex = index+1; if(newIndex==4||newIndex==5){newIndex=0} }}) ;  
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
        <DropdownMenu className={styles.dropdownMenu}>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[0])}}>
            {DateFilterOptions[0].name}
          </DropdownItem>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[1])}}>
            {DateFilterOptions[1].name}
          </DropdownItem>
          <DropdownItem  className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[2])}}>
            {DateFilterOptions[2].name}
          </DropdownItem>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changePeriod  (DateFilterOptions[3])}}>
            {DateFilterOptions[3].name}
          </DropdownItem>
          <DropdownItem className={styles.dropdownItemChoseDate} onClick={()=>{changePeriod  (DateFilterOptions[4])}}>
            Указать даты <br/>
            <input className={styles.dateInput} onChange={(e)=>{DateFilterOptions[4].value.start=new Date(Date.parse(e.target.value))}} defaultValue={ChosenFilter.periodFilter[0]} onClick={(e)=>{e.stopPropagation()}} type='date'/>
            -
            <input className={styles.dateInput}  onChange={(e)=>{DateFilterOptions[4].value.end=new Date(Date.parse(e.target.value))}} defaultValue={ChosenFilter.periodFilter[1]} onClick={(e)=>{e.stopPropagation()}} type='date'/>
          </DropdownItem>

        </DropdownMenu>
      </ButtonDropdown>
      <div onClick={()=>{nextPeriodFilter()}} className={styles.button_right}><RewindArrowIcon direction='Right'/></div>
    </div>
  )
}

