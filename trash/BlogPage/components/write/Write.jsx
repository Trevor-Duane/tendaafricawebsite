import React from 'react';
import { MdAdd } from 'react-icons/md';
import './write.css';

export default function Write() {
  return (
    <div className="write">
        <img
            className="writeImg"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
            alt=""
        />
        <form className="writeForm">
            <div className="WriteFormGroup">
                <label htmlFor="fileInput">
                    <MdAdd className="writeIcon"/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="write here" type="text" className="writeInput writeText"></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
