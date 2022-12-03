import { createContext, ReactNode, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Task } from '../components/TaskArea'

interface TaskContextProviderProps {
  children: ReactNode
}

interface TaskContextProps {
  tasks: Task[]
  completedTasks: number
  removeTask: (id: string) => void
  changeCompletedTask: (id: string) => void
  addTaskInList: (newTask: Task) => void
}

const taskList = [
  {
    id: uuid(),
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: true,
  },
  {
    id: uuid(),
    title:
      'Ex cillum do pariatur ullamco culpa nulla reprehenderit deserunt cupidatat reprehenderit eu est., checked: false',
    checked: false,
  },
  {
    id: uuid(),
    title:
      'Aliqua voluptate cillum aliquip est ipsum deserunt pariatur ad proident ut.',
    checked: true,
  },
]

export const TaskContext = createContext({} as TaskContextProps)

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(taskList)

  function addTaskInList(newTask: Task) {
    console.log(newTask)
    setTasks((prevState) => [...prevState, newTask])
  }

  function changeCompletedTask(id: string) {
    const tasksChangedStatus = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: !task.checked }
      }
      return task
    })
    setTasks(tasksChangedStatus)
  }

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1
    }
    return acc
  }, 0)

  function removeTask(id: string) {
    const taskListWithoutRemovedTask = tasks.filter((task) => task.id !== id)
    setTasks(taskListWithoutRemovedTask)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        completedTasks,
        changeCompletedTask,
        removeTask,
        addTaskInList,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
