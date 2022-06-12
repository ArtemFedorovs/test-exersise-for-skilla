
import styles from './Balance.module.css';
import PlusIcon from '../../icons/PlusIcon.svg';

export default function Filters() {
 


  return (
    <div className={styles.balance}>Баланс <span className={styles.blackText}>272 &#8381;</span><img className={styles.icon} src={PlusIcon} /></div>
  )
}

