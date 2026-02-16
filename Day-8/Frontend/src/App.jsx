import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [note, setnote] = useState([
    {
    title:"test title 1",
    description:"test description 1"
    },
    {
    title:"test title 2",
    description:"test description 2"
    },
    {
    title:"test title 3",
    description:"test description 3"
    },
    {
    title:"test title 4",
    description:"test description 4"
    }
])

  function fetchNotes(){
      axios.get('http://localhost:3000/api/notes')
  .then((res)=>{
    setnote(res.data.note)
  })
  }

  useEffect(()=>{
    fetchNotes()
  },[])

  function handleSubmit(e){
    e.preventDefault();
    const {title,description}=e.target.elements
    console.log(title.value,description.value)


    axios.post("http://localhost:3000/api/notes",{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
  }

function handledeleteNotes(noteId){
  axios.delete("http://localhost:3000/api/notes/"+noteId)
  .then(res=>{
    console.log(res.data)
    fetchNotes()
  })
}

  return (
    <>
  <form className='note-create-form' onSubmit={handleSubmit}>
    <input name='title' type="text" placeholder='Enter Title' />
    <input name='description' type="text" placeholder='Enter Descritpion' />
    <button>Create Note</button>
  </form>

    <div className='notes'>
      {
        note.map((note,id)=>{
          return <div className="note" key={id}>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={()=>{
          {handledeleteNotes(note._id)}
        }}>Delete</button>
      </div>
        })
      }
      
    </div>
    </>
  )
}

export default App