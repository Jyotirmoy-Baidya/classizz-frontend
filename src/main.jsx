import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/animation.css'
import './styles/class.css'
import { SearchContextProvider } from './context/SearchContext.jsx'
import { NavContextProvider } from './context/NavContext.jsx'
import { ClassContextProvider } from './context/ClassContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchContextProvider>
      <NavContextProvider>
        <ClassContextProvider>
          <App />
        </ClassContextProvider>
      </NavContextProvider>
    </SearchContextProvider>
  </React.StrictMode>,
)
