import React from "react";
import { useState, useEffect } from "react";
import './styles/app.css';
import Posts from "./components/Posts";
import Form from "./components/Form";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/Modal/Modal";
import MyButton from "./components/UI/button/MyButton";
import axios from 'axios'
import PostService from "./API/PostService";


function App() {

  const [posts, setPost] = useState([
    {id:1, title:"Первый", body:'hhhescription'},
    {id:2, title:"Второй", body:'fffdescription'},
    {id:3, title:"Третий", body:'aaadescription'}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(false)


  const createPost = (newPost)=>{
    setPost([...posts, newPost])
    setModal(false)
  }

  const removePost = (post)=>{
    setPost(posts.filter(p => p.id !== post.id))
  }

  const Sorted = (sort)=>{
    setSelectedSort(sort)
    //Состояние напрямую менять нельзя, поэтому развернем копию
    setPost([...posts].sort((a,b)=>
      // console.log(a[sort],b[sort])
      a[sort].localeCompare(b[sort])
    ))
  }

  const Search = posts.filter((elem)=>{
    return elem.title.toLowerCase().includes(search.toLowerCase())
  })

  
  const fetchPosts = async ()=>{
   const posts = await PostService()
   setPost(posts)  
  }

  useEffect(() => {
    fetchPosts()
  }, []);


  return(
    <div className="App">
      <MyButton style={{marginTop:30}} onClick={()=>setModal(true)}>
        Создать пользователя
      </MyButton>
      <Modal vizible = {modal} setVizible={setModal}>
        <Form create = {createPost}/>
      </Modal>
      
      <hr style={{margin:"15px 0px"}}></hr>
      <PostFilter selectedSort={selectedSort} Sorted = {Sorted} search = {search} setSearch={setSearch}/>

      {Search.length !== 0
        ? <Posts remove ={removePost} posts={Search} title = "Список постов 1"/>   
        :
      <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  )

  
  
}

export default App;
