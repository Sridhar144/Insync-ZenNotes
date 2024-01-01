import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import React, {useState, useEffect} from 'react'
import { useParams,Link, useNavigate   } from "react-router-dom";
// import {Link} from 
const NotePage = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    let [note, setNote]=useState(null)
    const [message, setMessage] = useState('');

    useEffect(()=>{
        getNote()
    },[id])

    let getNote=async()=>{
      if (id==='new') return
        let response= await fetch(`/api/notes/${id}/`)
        let data=await response.json()
        setNote(data)
    }

    let updateNote=async()=>{
      fetch(`/api/notes/${id}/update/`,{
        method: "PUT", 
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(note)
      })
      setMessage('Note updated successfully!');
    }

    let createNote=async()=>{
      fetch(`/api/notes/create/`,{
        method: "POST", 
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(note)
      })
      setMessage('Note created successfully!');
    }

    let deleteNote=async ()=>{
      fetch(`/api/notes/${id}/delete/`,{
        method: "DELETE", 
        headers:{
          'Content-Type': 'application/json'
        }
      })
      setMessage('Note deleted successfully!');
        navigate('/');
    }
    
    let handleSubmit=()=>{
      // updateNote()
      console.log(note.body)
      if (id!=='new' && note.body===''){
        deleteNote()
      }
      else if (id!=='new'){
        updateNote()
      }
      else if (id=='new' && note!==null){
        createNote()
      }
      navigate('/');
    }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit}/>
        </h3>
        {id!=='new' ? (
          <button onClick={deleteNote}>DELETE</button>
        ): (
          <button onClick={handleSubmit}>DONE</button>

        )}
      </div>
      <textarea onChange={(e)=> {setNote({ ...note,'body': e.target.value})}} value={note?.body}></textarea>
      {message && <div className='message'>{message}</div>}
    </div>
  )
}

export default NotePage



// let CSRF = document.cookie.slice(10)
// let updateNote = async ()=>{
//     fetch('/api/notes/'+ noteId + '/update/', {
//       method: 'PUT',
//       headers: {
//         "Content-Type":"application/json",
//         "X-CSRFToken": CSRF
//       },
//       body:JSON.stringify(note)
//     })
//   }