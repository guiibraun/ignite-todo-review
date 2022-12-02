import { PlusCircle } from 'phosphor-react'
import { Header } from './components/Header'
import { TaskArea } from './components/TaskArea'
import { globalStyles } from './styles/globals'
import { AddTaskForm, HomeContainer } from './styles/pages/home'

globalStyles()

export function App() {
  return (
    <>
      <Header />
      <HomeContainer>
        <AddTaskForm>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <PlusCircle size={16} />
          </button>
        </AddTaskForm>
        <TaskArea />
      </HomeContainer>
    </>
  )
}
