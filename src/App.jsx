import { useState } from 'react'
import { Routes, Route, Link } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Greetings from './components/Greetings'
import Cheeses from './components/Cheeses'
import CheeseIndex from './components/CheeseIndex'
import Brie from './components/Brie'
import Cheddar from './components/cheddar'
import CheeseNotFound from './components/CheeseNotFound'
import EntryForm from './components/EntryForm'
import Result from './components/Result'

import './App.css'



function App() {
  const [entry, setEntry] = useState('');
  return (
    <>
      <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/form">Form</Link> | <Link to="/cheeses">Cheeses</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hello/:name" element={<Greetings />} />
        <Route path="/cheeses" element={<Cheeses />}>
          <Route index element={<CheeseIndex />} />
          <Route path="brie" element={<Brie />} />
          <Route path="cheddar" element={<Cheddar />} />
          <Route path="*" element={<CheeseNotFound />} />
        </Route>
        <Route path="/form" element={<EntryForm formAction={setEntry}/>} />
        <Route path="/result" element={<Result entry={entry} />} />
      </Routes>
    </>
  )
}

export default App
