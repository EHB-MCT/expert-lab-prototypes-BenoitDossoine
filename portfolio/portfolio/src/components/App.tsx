import Header from "./Header";
import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/work"></Route>
        <Route path="/about"></Route>
      </Routes>
    </div>
  );
}

export default App;
