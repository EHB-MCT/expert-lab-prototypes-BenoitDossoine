import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

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
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/project/:id" element={<DetailPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
