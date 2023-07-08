import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainRouter from "./routes/MainRouter";
import { CartProvedor } from "./context/CartContext";

const App = () => {

  return (
    <div className="App">
      <CartProvedor>
      <MainRouter />
      </CartProvedor>     
      
    </div>
  );
};

export default App;