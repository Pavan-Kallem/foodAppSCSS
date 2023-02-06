import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import {Routers} from "./Routers/Routers";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </div>
  )
}

export default App
