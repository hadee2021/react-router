import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Article from './pages/Article'
import Articles from './pages/Articles'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
