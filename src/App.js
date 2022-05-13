import Body from "./Body";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/sneakers/" element={<Body/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
