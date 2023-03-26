import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home/>} path="/" />
         
          
      
      </Routes>
    </div>
  );
}
export default App;
