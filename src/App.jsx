import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App =() => {

  const [count, setCount] = useState(0) // siempre debe comenzar con set

  const sumar =() =>{
    setCount(count + 1)
  }

  const restar = () => {
    setCount(count-1)
  }

return(
  <div className='App'>

    
   <NavBar />
   <ItemListContainer greeting={"Bienvenidos a Cabañas Rio !!"} />
    
  </div>
)


}

export default App;