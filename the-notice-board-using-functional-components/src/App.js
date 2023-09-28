import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default function App (){

  const apiKey=process.env.REACT_APP_API_KEY

 
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<News pageSize={15} country="in" category="general" apiKey={apiKey}/>} />
            <Route path='/business' element={<News pageSize={15} country="in" category="business" apiKey={apiKey}/>} />
            <Route path='/entertainment' element={<News pageSize={15} country="in" category="entertainment" apiKey={apiKey}/>} />
            <Route path='/health' element={<News pageSize={15} country="in" category="health" apiKey={apiKey}/>} />
            <Route path='/science' element={<News pageSize={15} country="in" category="science" apiKey={apiKey}/>} />
            <Route path='/sports' element={<News pageSize={15} country="in" category="sports" apiKey={apiKey}/>} />
            <Route path='/technology' element={<News pageSize={15} country="in" category="technology" apiKey={apiKey}/>} />
          </Routes>
        </BrowserRouter>
      </div>


    )
}

