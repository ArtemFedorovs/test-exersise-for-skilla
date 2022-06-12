import React from 'react'
import styles from './CallsHeader.module.css';

export default function CallsHeader(props:any) {
  return (
    <div className={styles.callsHeader}>
      <div className={styles.arrow}>Тип</div>
      <div className={styles.time_of_call}>Время</div>
      <div className={styles.person_avatar}>Cотрудник</div>
      <div className={styles.from_site}></div>
      <div className={styles.client_info}>Звонок</div>
      <div className={styles.source}>Источник</div>
      <div className={styles.score}>Оценка</div>
      <div className={styles.time}>Длительность</div>
    </div>
  )
}
