import { useState } from 'react';

import styles from './Filters.module.css';
import { ButtonDropdown,DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import RewindArrowIcon from '../../icons/RewindArrowIcon';


export default function Filters() {

  
  const [isDropdown, setDropdown] = useState(false) ;  //State for visibility of dropdawn
  
  const ChosenFilter:any = useSelector((state:any)=>state.Filter.typeFilter);
  const dispatch=useDispatch();
  function changeChosenType (ChosenType: string)  { //dispatch new periodFilter settings
      dispatch({type: "DISPATCH CHOSEN TYPE", payload: ChosenType}) ;
  }


  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
      <ButtonDropdown  isOpen={isDropdown} toggle={() => setDropdown(!isDropdown)}>
        <DropdownToggle color="white" >
          <p className={styles.text}>{ChosenFilter} </p>
          {isDropdown?<RewindArrowIcon direction="Top"/>:<RewindArrowIcon direction="Bottom"/>}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changeChosenType('Все типы')}}>
            Все типы
          </DropdownItem>
          <DropdownItem className={styles.dropdownItem} onClick={()=>{changeChosenType('Входящие')}}>
            Входящие
          </DropdownItem>
          <DropdownItem className={styles.dropdownItem}  onClick={()=>{changeChosenType('Исходящие')}}>
            Исходящие
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все сотрудники </p>
        <RewindArrowIcon direction="Bottom"/>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все звонки </p>
        <RewindArrowIcon direction="Bottom"/>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все источники </p>
        <RewindArrowIcon direction="Bottom"/>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все оценки </p>
        <RewindArrowIcon direction="Bottom"/>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все ошибки </p>
        <RewindArrowIcon direction="Bottom"/>
      </div> 
    </div>
  )
}

