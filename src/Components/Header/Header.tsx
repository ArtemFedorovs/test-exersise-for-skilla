
import styles from './Header.module.css';
import SearchIcon from '../../icons/SearchIcon.svg';
import RewindArrowIcon from '../../icons/RewindArrowIcon';
import UserPhoto from '../../Pics/UserPhoto.png';



export default function Header() {


  return (
    <div className={styles.header}>
      <div className={styles.greyText}>Среда, 13 окт</div>
      <div className={styles.blackText}>
        <div className={styles.blackText}>Новые звонки <span className={styles.greenText}>20 из 30 шт</span></div>
        <progress  max="100" value="50"/> 
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>Качество разговоров <span className={styles.yellowText}>40%</span></div>
        <progress  max="100" value="50"/> 
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>Конверсия в заказ <span className={styles.redText}>67%</span></div>
        <progress  max="100" value="50"/> 
      </div>
      <img className={styles.icon} src={SearchIcon} />
      <div className={styles.greyText}>
        ИП Сидорова Александра Михайловна <RewindArrowIcon direction="Bottom"/>
      </div>
     
      <div className={styles.date}>
        <img className={styles.UserPhoto} src={UserPhoto}/> <RewindArrowIcon direction="Bottom"/>
      </div>  
    </div>
  )
}
