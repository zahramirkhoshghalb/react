import React from 'react'
import styles from "./Contact.module.css"

function Contact() {
  return (
    <>
    <div className={styles.container}>
    <div id={styles.first} >
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Last Name' />
    </div>
    <div id={styles.first}  >
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Phone' />
       
    </div>
    <button id={styles.first} >Add Contact</button>
    <div>

    </div>
    </div>
   
    </>
  )
}

export default Contact