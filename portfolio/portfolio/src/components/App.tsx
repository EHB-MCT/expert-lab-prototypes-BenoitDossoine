import Header from "./Header";
import {Routes, Route, useLocation} from "react-router-dom"
import Homepage from "./Homepage";
import Workpage from "./Workpage";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/work" element={<Workpage/>}></Route>
          <Route path="/about"></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
