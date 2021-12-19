import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../interfaces/Task'

type HandleInputChange = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>

interface Props {
  addANewTask: (task:Task)=>void
}

const initialState = {
  title:'',
  description:''
}
const TaskForm = ({addANewTask}:Props) => {
  const [form, setForm] = useState(initialState)

  const handleChange= ({target:{name,value}}:HandleInputChange) =>{
      
    setForm({
      ...form,
      [name]:value
    })
  }

  const handleNewTask = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    addANewTask(form)
    setForm(initialState)
  }

  return (
    <form onSubmit={handleNewTask}>
      <h1 className="text-center">New Task</h1>
      <div className="form-group">
        <label htmlFor='exampleInputEmail1' className="form-label mt-4">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={handleChange}
          value={form.title}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor='exampleInputEmail1' className="form-label mt-4">Description</label>
        <textarea
          className="form-control"
          name="description"
          value={form.description}
          onChange={handleChange}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email" />
      </div>
      <button type="submit" className="btn btn-info mt-4">Save</button>
    </form>
  )
}

export default TaskForm
