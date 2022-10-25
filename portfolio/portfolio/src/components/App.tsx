import Header from "./Header";
import {Routes, Route, useLocation} from "react-router-dom"
import Homepage from "./Homepage";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
