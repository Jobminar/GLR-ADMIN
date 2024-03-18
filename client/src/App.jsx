import Contextprovider from "./components/Contextprovider"
import Routing from "./components/Routing"



function App() {

  return (
    <>
         <Contextprovider>
             <Routing />
         </Contextprovider>
    </>
  )
}

export default App
