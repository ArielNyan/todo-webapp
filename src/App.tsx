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

  const editItem = () => {
    if(editedItem===''){
    setCanEdit(null)
    setEditedItem('')
    return
    }
    setTodoList((current) => 
      current.map((item, index)=> index===canEdit ? editedItem : item)
    )
    setCanEdit(null)
    setEditedItem('')
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
    <div className='card'>
      <input id='input' placeholder='aaaaa' onChange={(e) => {setTodo(e.target.value)}}/>
      <button className='btn' onClick={()=>updateList(todo)}>asdad</button>
      
      <ul className='list'>
        {todolist.map((item, index) => (
          <li key={index}>
          {canEdit === index
            ? 
            <>
              <input 
                className='itemEdit'
                value={editedItem}
                onChange={(e)=> setEditedItem(e.target.value)}
                />
              <button className='btn' onClick={cancelEdit}>Cancel</button>
              <button className='btn' onClick={editItem}>Confirm</button>
            </>
            : 
              <>
              <span className='item'>{item}</span>
              <button onClick={()=>deleteItem(index)} className='deleteButton btn'>
              X
              </button>
              <button className='btn' onClick={()=>startEdit(index)}>EDIT</button>
              </>
            }
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
