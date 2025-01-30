import {Navigate, Routes, Route} from 'react-router'
import React from "react";
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Contacts from './Components/Contacts/Contacts'
import AboutMe from './Components/AboutMe/AboutMe'
import ErrorBoundary from './ErrorBoundary'
import './App.css'
function App() {
    return (
      <div className='App'>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
          <Routes>
            <Route path='/main-page' element={<ErrorBoundary><Main/></ErrorBoundary>}/>
            <Route path='*' element={<Navigate to="/main-page" replace/>}/>
            <Route path='/contacts' element={<ErrorBoundary><Contacts/></ErrorBoundary>}/>
            <Route path='/about-me' element={<ErrorBoundary><AboutMe/></ErrorBoundary>}/>
          </Routes>
      </div>
    )
}

export default App;
