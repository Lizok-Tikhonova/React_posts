import React from "react";
import { useState } from "react";
import MyButton from ".//UI/button/MyButton";
import MyInp from ".//UI/input/MyInput";


const Form = (props)=>{

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNewPost = (e)=>{
        e.preventDefault()
     
        const newPost={
         title,
         body,
         id: Date.now(),
        }
        props.create(newPost)
        setTitle('')
        setBody('')
     }

    return(
        <form>
        <MyInp type="text" placeholder="Name" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <MyInp type="text" placeholder="описание" value = {body} onChange={(e)=>{setBody(e.target.value)}}/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
}

export default Form;