
import styles from './SidebarMenuItem.module.css';


type SidebarMenuItemType = {
  icon: any,
  name: string,
 }

export default function SidebarMenuItem(props: SidebarMenuItemType)  {

  

  return ( 
  <div className={styles.menuItem} >
    <img className={styles.icon} src={props.icon} />
    <div className={styles.name}>{props.name}</div>    
  </div>
  )
}
