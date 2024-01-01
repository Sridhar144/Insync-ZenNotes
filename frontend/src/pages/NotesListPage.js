import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])


    let getNotes = async () => {

        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log('DATA:', data)

        setNotes(data)
    }
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782;Notes</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
      <div className='notes-list'>
        {notes.map((note,index)=>(
          <ListItem key={index} note={note}></ListItem>
        ))}
      </div>
      <AddButton/>
    </div>
  )
}

export default NotesListPage
// One of your dependencies, babel-preset-react-app, is importing the     
// "@babel/plugin-proposal-private-property-in-object" package without    
// declaring it in its dependencies. This is currently working because    
// "@babel/plugin-proposal-private-property-in-object" is already in your 
// node_modules folder for unrelated reasons, but it may break at any time.

// babel-preset-react-app is part of the create-react-app project, which  
// is not maintianed anymore. It is thus unlikely that this bug will      
// ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" 
// to
// your devDependencies to work around this error. This will make this message
// go away.
