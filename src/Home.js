import React from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import { Link } from 'react-router-dom'
const Home = () => {
  return <main>
      <Form/>
      <Movies/>
  </main>
}

export default Home
