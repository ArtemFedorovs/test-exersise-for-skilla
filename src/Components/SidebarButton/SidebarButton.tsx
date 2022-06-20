
import styles from './SidebarButton.module.css';


type SidebarMenuButtonType = {
  icon: any,
  name: string,
 }

export default function SidebarMenuButton(props: SidebarMenuButtonType)  {

  

  return ( 
  <div className={styles.button} >
    <div className={styles.name} >{props.name}</div>
    <img className={styles.icon} src={props.icon} />

  </div>
  )
}
