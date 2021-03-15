import React, { useState } from 'react';
import './App.css';
import 'tachyons';
import Header from './components/Header';
import Content from './components/Content';

export const AppContext = React.createContext();

function App() {

  const [data, setData] = useState('');
  const [city, setCity] = useState('');
  const [result, setResult] = useState(false);

  return (
    <AppContext.Provider value={{ setCity, setData, data, city, result, setResult }}>
      <div className="center" style={{width:"50%"}}>
      <Header />
      <Content />
      </div>
    </AppContext.Provider>
  )


}

export default App;
