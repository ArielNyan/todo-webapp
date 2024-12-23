import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState<string>('')
  const [todolist, setTodoList] = useState<Array<string>>([])
  const [canEdit, setCanEdit] = useState<number | null>(null)
  const [editedItem, setEditedItem] = useState<string>("")


  const deleteItem = (index: number) => {
    setTodoList((current) => current.filter((_, i) => i !== index))
    setCanEdit(null)
  }
  const startEdit = (index: number) => {
    setCanEdit(index)
    setEditedItem(todolist[index])
  }
  const cancelEdit = () => {
    setCanEdit(null)
    setEditedItem('')
  }

  const editItem = (index: number) => {
    
  }

  const updateList = (t: string) => {
    if(t === ""){
      return
    }
    setTodoList((current) => [...current, t]);
    setTodo('')
    document.getElementById('input').value = ''
    } 
  return (
    <>
      <input id='input' placeholder='aaaaa' onChange={(e) => {setTodo(e.target.value)}}/>
      <button onClick={()=>updateList(todo)}>asdad</button>
      
      <ul className='list'>
        {todolist.map((item, index) => (
          <li key={index}>
          {canEdit === index
            ? 
            <>
              <input 
                value={editedItem}
                onChange={(e)=> setEditedItem(e.target.value)}
                />
              <button onClick={cancelEdit}>Cancel</button>
              <button>Confirm</button>
            </>
            : 
              <>
              <span className='item'>{item}</span>
              <button onClick={()=>deleteItem(index)} className='deleteButton'>
              X
              </button>
              <button onClick={()=>startEdit(index)}>EDIT</button>
              </>
            }
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
