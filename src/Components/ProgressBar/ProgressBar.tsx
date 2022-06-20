import styles from './ProgressBar.module.css';

type ProgressBarPropsType = {
  color: string,
  progress: number,
 }

export default function ProgressBare(props: ProgressBarPropsType)  {


  const  width= 156*props.progress;


  return ( 
   <div className={styles.bar}>
     <div 
        style={{ 
          backgroundColor: props.color, 
          width:  width
        }} 
        className={styles.progress}></div>
   </div>
  )
}
