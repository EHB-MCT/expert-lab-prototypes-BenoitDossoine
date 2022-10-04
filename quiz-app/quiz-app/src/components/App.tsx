import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
import Masterpage from "./Masterpage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/admin" element={<Masterpage/>}></Route>
      <Route path="/quiz"></Route>
    </Routes>
  );
}

export default App;
