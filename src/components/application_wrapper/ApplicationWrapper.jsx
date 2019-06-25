import React from 'react'
import styles from './ApplicationWrapper.module.scss'

const ApplicationWrapper = props => {
  return (
    <div className={styles.ApplicationWrapper}>
      {props.children}
    </div>
  )
}

export default ApplicationWrapper
