import React from 'react'
import {Link} from 'react-router-dom'

let getTitle=(note)=>{
  let title=note.body.split('\n')[0]
  if (title.length>40){
    return title.slice(0,45)
  }
  return title
}

let getDate=(note)=>{
  return new Date(note.updated).toLocaleDateString()
}

let getContent=(note)=>{
  let title=getTitle(note)
  let content=note.body.replaceAll('\n',' ')
  content=content.replaceAll(title,'')
  if (content.length>40){
    return content.slice(0,40)+'...'
  }
  else{
    return content
  }
}

const ListItem = ({note}) => {
  return (
    <Link to = {`/note/${note.id}`}>
      <div className='notes-list-item'>
      <h3>Note number: {note.id}-{getTitle(note)}</h3>
      <p><span>Date: {getDate(note)}</span>{getContent(note)}</p>
      </div>
    </Link>
  )
}

export default ListItem
