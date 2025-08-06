import { useContext, useState } from "react";
import useText from "../../hooks/todo/useText";
import { TodoContext } from "./providers/TodoContext";

type props = {
  handleFilter: (filter: string) => void;
}

export default function TodoInput(props: props) {
    const {text, setText} =useText()
    const {handleSubmit} = useContext(TodoContext)!
    const {handleFilter}  = props

    return (
        <div className='container w-75 mt-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-3 justify-content-center align-items-center'>
              <input type="text" className='input-group-text' value={text} onChange= {(e) => setText(e.target.value)}/>
              <button className='btn btn-primary' onClick = {() => {
                handleSubmit(text) ;
                setText("");} }>追加</button>
            </div>
            
            <div>
              <select defaultValue="all" onChange={(e) => handleFilter(e.target.value)}>
                <option value="all">すべて</option>
                <option value="checked">完了</option>
                <option value="unchecked">未完</option>
              </select>
            </div>
          </div>
        </div>
    );
    
}