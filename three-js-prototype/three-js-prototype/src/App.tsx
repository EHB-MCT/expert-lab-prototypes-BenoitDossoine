import React from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload';
import ModelList from './components/ModelList';
import ModelPreviewContainer from './components/ModelPreviewContainer';

function App() {
  return (
    <div className="App">
        <ModelPreviewContainer></ModelPreviewContainer>
    </div>
  );
}

export default App;
