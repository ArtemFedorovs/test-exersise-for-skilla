
import styles from './SidebarMenuItem.module.css';


type SidebarMenuItemType = {
  icon: any,
  name: string,
  active: boolean,
 }

export default function SidebarMenuItem(props: SidebarMenuItemType)  {

  

  return ( 
  <div className={props.active?styles.menuItem_active:styles.menuItem} >
    <img className={styles.icon} src={props.icon} />
    <div className={props.active?styles.name_active:styles.name}>{props.name}</div> 
    {props.active&&<div className={styles.yellowCircle}/> }   
  </div>
  )
}
