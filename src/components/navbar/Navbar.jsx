import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <a href="1">Quizzes</a>
      <a href="2">Add Quiz</a>
      <a href="3">About Me</a>
    </div>
  )
}

export default Navbar
 