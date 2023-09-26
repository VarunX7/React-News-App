import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  apiKey=process.env.REACT_APP_API_KEY

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<News pageSize={15} country="in" category="general" apiKey={this.apiKey}/>} />
            <Route path='/business' element={<News pageSize={15} country="in" category="business" apiKey={this.apiKey}/>} />
            <Route path='/entertainment' element={<News pageSize={15} country="in" category="entertainment" apiKey={this.apiKey}/>} />
            <Route path='/health' element={<News pageSize={15} country="in" category="health" apiKey={this.apiKey}/>} />
            <Route path='/science' element={<News pageSize={15} country="in" category="science" apiKey={this.apiKey}/>} />
            <Route path='/sports' element={<News pageSize={15} country="in" category="sports" apiKey={this.apiKey}/>} />
            <Route path='/technology' element={<News pageSize={15} country="in" category="technology" apiKey={this.apiKey}/>} />
          </Routes>
        </BrowserRouter>
      </div>


    )
  }
}

