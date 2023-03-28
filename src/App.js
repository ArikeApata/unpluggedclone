import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Host from "./Hostpage";
import Create from "./Create";
import Profile from "./Profile";

function App() {
  return (
    <div className="App bg-dark">
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Host />} path="/host" />
        <Route element={<Create />} path="/create" />
        <Route element={<Profile />} path="/you" />
      </Routes>
    </div>
  );
}
export default App;
