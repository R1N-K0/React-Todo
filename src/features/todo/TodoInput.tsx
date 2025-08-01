import { useState } from "react";
import useText from "../../hooks/todo/useText";


type Props = {
    handleSubmit: (text:string) => void;
    handleFilter: (text: string) => void
}

export default function TOdoInput(props: Props) {
    const {text, setText} =useText()

    return (
        <div className='container w-75 mt-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-3 justify-content-center align-items-center'>
              <input type="text" className='input-group-text' value={text} onChange= {(e) => setText(e.target.value)}/>
              <button className='btn btn-primary' onClick = {() => {
                props.handleSubmit(text) ;
                setText("");} }>追加</button>
            </div>
            
            <div>
              <select defaultValue="all" onChange={(e) => props.handleFilter(e.target.value)}>
                <option value="all">すべて</option>
                <option value="checked">完了</option>
                <option value="unchecked">未完</option>
              </select>
            </div>
          </div>
        </div>
    );
    
}