import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import PortFo from './Pages/PortFo.jsx'
import Home from './Pages/HomePage.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound.jsx'
import Movies from './Pages/Movies.jsx'
import Movie from './Pages/Movie.jsx'
const App = () => 
{
   
  return (
      <div className='MainAppDiv'>
      <Header />
      <div className='AppDiv'>
      <Routes>
      <Route path='/'           Component={Home} />
      <Route path='/movies'     Component={Movies}/>
      <Route path='/about'      Component={About} />
      <Route path='/contact'    Component={Contact} />
      <Route path='/portfo'     Component={PortFo} />
      <Route path='/movie/:id'  Component={Movie} />
      <Route path='*'           Component={NotFound} />
      </Routes>
      </div>
     
      <Footer />
    </div>
  )
}

export default App
