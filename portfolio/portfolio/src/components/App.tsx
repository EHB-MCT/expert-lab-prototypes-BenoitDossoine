import {useEffect, useState} from 'react';
import Loader from './Loader';
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
      <AnimatePresence>
        {loading?<Loader key="loader"></Loader>:<p>Content!</p>}
      </AnimatePresence>
    </div>
  );
}

export default App;
