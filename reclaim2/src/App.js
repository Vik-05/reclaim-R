import { BrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";
import NavBar from "./components/NavBar";
import Page from "./pages/Page";
function App() {
  
  return (
    <div className="App">
    <BrowserRouter>  
      
      <Page/>
    </BrowserRouter>
    </div>
  );
}

export default App;

// signin signup found/lost sell