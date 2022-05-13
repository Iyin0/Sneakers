import Body from "./Body";
import Navbar from "./Navbar";
import { BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Body/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
