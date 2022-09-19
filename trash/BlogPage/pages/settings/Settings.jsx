import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { FaUserCircle } from 'react-icons/fa'
import './settings.css';

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                        className=""
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
                        alt=""
                    />
                    <label htmlFor="fileInput">
                        <FaUserCircle className="settingsPPIcon"/>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="safak"/>
                <label>Email</label>
                <input type="email" placeholder="safak"/>
                <label>Password</label>
                <input type="password" placeholder="safak"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>

    </div>
  )
}
