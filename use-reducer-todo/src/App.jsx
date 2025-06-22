import { useState } from 'react'
import { AppProvider } from './AppContext'
import { Container, InputBlock, TaskList } from './components'

function App() {
  return (
    <AppProvider>
      <Container>
        <InputBlock />
        <TaskList />
      </Container>
    </AppProvider>
  )
}

export default App
