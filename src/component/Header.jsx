import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <p>
            <a href="https://www.w3schools.com/">W3 School</a>|React Tutorial

        </p>
    </div>
  )
}

export default Header