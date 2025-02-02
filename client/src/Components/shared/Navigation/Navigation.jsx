import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
    const brandStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.5rem',
    }
    const logoText = {
        marginLeft: '10px',
    }
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
      👋
      <span style={logoText}>Coders Voice</span>
      </Link>
    </nav>
  )
}

export default Navigation
