import { Routes, Route } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound'
import PokemonInfo from './pages/PokemonInfo'
import Home from './pages/Home'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/pokemon/:pokemonID' element={<PokemonInfo />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
