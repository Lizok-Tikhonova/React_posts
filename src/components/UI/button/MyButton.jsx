import React from "react";
// import classes from './MyButton.module.css'
import styles from './MyButton.module.css'

const MyButton = ({...props}) => {
    // console.log({...props})
    return(
        <button {...props} className={styles.myBtn} >
            {/* {props.children} */}
        </button>
    )
}
   
  
  export default MyButton;