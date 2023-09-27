import React from "react";
import MyInp from "./UI/input/MyInput";
import Select from "./UI/select/Select";


const PostFilter = ({search, selectedSort, Sorted, setSearch})=>{
    return(
        <div>

            <MyInp placeholder={'Поиск...'} value ={search} onChange={e=>setSearch(e.target.value)}/>

            <Select value={selectedSort} onChange={Sorted} defaultValue={'Сортировка по'} options={[
                {value: 'title', name:"По названию"},
                {value: 'body', name:"По описанию"},
            ]}/>
      

        </div>
    );
}

export default PostFilter;