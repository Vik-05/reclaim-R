import React from 'react'
import NavBar from '../components/NavBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
    const notify = () => toast("Wow so easy!");
    return (
    <div>
        <NavBar />
        <button onClick={notify}>Notify!
        </button>
        
        <ToastContainer />
    </div>
  )
}
