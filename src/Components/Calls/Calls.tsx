import React from 'react'
import styles from './Calls.module.css';
import CallsHeader from '../CallsHeader/CallsHeader';
import CallsList from '../CallsList/CallsList';

export default function Calls () {


  return (
    <div className={styles.calls}>
      <CallsHeader text="asfasf"/>
      <CallsList/>
    </div>
  )
}
