import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { TaskContext } from '../../contexts/taskContext'
import { Task } from '../TaskArea'
import { v4 as uuid } from 'uuid'
import { AddTaskForm } from './styles'
import { PlusCircle } from 'phosphor-react'

export function TaskInput() {
  const { addTaskInList } = useContext(TaskContext)
  const [task, setTask] = useState('')

  function handleAddNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (task !== '') {
      const newTask: Task = {
        id: uuid(),
        title: task,
        checked: false,
      }
      addTaskInList(newTask)
      setTask('')
    }
  }

  function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value)
  }

  return (
    <AddTaskForm onSubmit={handleAddNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTask}
        value={task}
      />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </AddTaskForm>
  )
}
