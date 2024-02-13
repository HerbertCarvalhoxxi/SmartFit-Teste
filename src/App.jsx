
import Header from './components/header'
import FormArea from './components/form'
import Images from './components/images'
import ContextProvider from './context'
import Response from './components/response'

function App() {

  return (
    <>
    <ContextProvider>
      <Header/>
      <FormArea/>
      <Images/>
      <Response/>
    </ContextProvider>
      
    </>
  )
}

export default App
