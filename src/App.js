import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/movies/:id" element={<Movie/>} />
        </Routes>
    </BrowserRouter>
  )


}

export default App
