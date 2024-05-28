
import { GenerateProvider } from './context/generateContext'
import { GlobalStyle } from './globalStyle'
import { GeneratePassword } from './screens'

function App() {


  return (
    <body>
      <GenerateProvider>
        <GlobalStyle/>
        <GeneratePassword/>
      </GenerateProvider>
    </body>
  )
}

export default App
