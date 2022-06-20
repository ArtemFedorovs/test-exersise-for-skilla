
import styles from './Header.module.css';
import SearchIcon from '../../icons/SearchIcon.svg';
import RewindArrowIcon from '../../icons/RewindArrowIcon';
import UserPhoto from '../../Pics/UserPhoto.png';
import ProgressBar from '../ProgressBar/ProgressBar';


export default function Header() {


  return (
    <div className={styles.header}>
      <div className={styles.greyText}>Среда, 13 окт</div>
      <div className={styles.blackText}>
        <div className={styles.blackText}>Новые звонки <span className={styles.greenText}>20 из 30 шт</span></div>
        <ProgressBar  color="#28A879" progress={0.436}/> 
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>Качество разговоров <span className={styles.yellowText}>40%</span></div>
        <ProgressBar  color="#FFD500" progress={0.436}/> 
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>Конверсия в заказ <span className={styles.redText}>67%</span></div>
        <ProgressBar  color="#EA1A4F" progress={0.5}/> 
      </div>
      
      <div className={styles.greyText}>
        <img className={styles.icon} src={SearchIcon} />
        ИП Сидорова Александра Михайловна 
        <RewindArrowIcon direction="Bottom"/>
      </div>
     
      <div className={styles.date}>
        <img className={styles.UserPhoto} src={UserPhoto}/> <RewindArrowIcon direction="Bottom"/>
      </div>  
    </div>
  )
}
