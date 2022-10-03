import {Routes, Route} from "react-router-dom"
import Homepage from './Homepage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/admin"></Route>
      <Route path="/quiz"></Route>
    </Routes>
  );
}

export default App;
