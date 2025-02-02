import React from 'react'
import styles from './Button.module.css'
const Button = ({lable, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{lable}</span>
    </button>
  );
}

export default Button
