import React from "react";
import styles from './Modal.module.css'

const Modal = ({children, vizible, setVizible})=>{

    const ModalClasses = [styles.myModal]
    
    if(vizible){
        ModalClasses.push(styles.myModalActive)
    }

    return(
        //чтобы зарытие не распростронялось на все вложенные div
        <div className={ModalClasses.join(' ')}  onClick={(e)=>setVizible(false)}>
            <div   className={styles.myModalContent} onClick={(e)=>e.stopPropagation()}>
               {children}
            </div>
        </div>
    )
}

export default Modal