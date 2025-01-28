import {Navigate, Routes, Route} from 'react-router'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Contacts from './Components/Contacts/Contacts'
import AboutMe from './Components/AboutMe/AboutMe'
import './App.css'
function App() {
    return (
      <div className='App'>
          <Header />
            <Routes>
              <Route path='/main-page' element={<Main/>}/>
              <Route path='*' element={<Navigate to="/main-page" repalce/>}/>
              <Route path='/contacts' element={<Contacts />}/>
              <Route path='/about-me' element={<AboutMe />}/>
            </Routes>
      </div>
    )
}

export default App
