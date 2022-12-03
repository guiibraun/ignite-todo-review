import { Header } from './components/Header'
import { TaskArea } from './components/TaskArea'
import { TaskInput } from './components/TaskInput'
import { TaskContextProvider } from './contexts/taskContext'
import { globalStyles } from './styles/globals'
import { HomeContainer } from './styles/pages/home'

globalStyles()

export function App() {
  return (
    <TaskContextProvider>
      <Header />
      <HomeContainer>
        <TaskInput />
        <TaskArea />
      </HomeContainer>
    </TaskContextProvider>
  )
}
