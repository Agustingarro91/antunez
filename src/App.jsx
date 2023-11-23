import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Componentes/Nav/Nav'
import Home from './Componentes/Home/Home'
import Contact from './Componentes/Contacto/Contact'
import Jobs from './Componentes/Jobs/Jobs'
import Footer from './Componentes/Footer/Footer'
import Abogados from './Componentes/Abogados/Abogados'
import Nosotros from './Componentes/Nosotros/Nosotros'

function App() {



  return (
    <HashRouter>
      <header className='header'>
        <Nav/>        
      </header>
      <main className='main'>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path='/jobs' element= {<Jobs/>}/>
            <Route path='/partners' element={<Abogados/>}/>
            <Route path='/about' element={<Nosotros/>}/>
          </Routes>        
      </main> 
      <footer className='footer'>
        <Footer/>
      </footer> 
    </HashRouter>
  )
}

export default App
