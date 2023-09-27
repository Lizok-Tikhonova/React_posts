import React from "react";
import styles from './MyInput.module.css'

const MyInp = (props)=>{

    return(
        <input {...props} className={styles.MyInp}/>
    )
}

export default MyInp