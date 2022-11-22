import {useEffect, useState} from 'react';
import Loader from './Loader';
import HomePage from './HomePage';
import {AnimatePresence} from "framer-motion";
function App() {
  const [loading,setLoading] = useState(false);
  
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },10000);
  },[])
  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
}

export default App;
